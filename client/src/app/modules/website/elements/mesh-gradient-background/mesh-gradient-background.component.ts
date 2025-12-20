import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Input,
  PLATFORM_ID,
  Inject
} from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import {
  ShaderMount,
  meshGradientFragmentShader,
  getShaderColorFromString
} from '@paper-design/shaders'

@Component({
  selector: 'app-mesh-gradient-background',
  standalone: true,
  template: `<div #container class="mesh-gradient-container"></div>`,
  styles: [
    `
      :host {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
      }

      .mesh-gradient-container {
        width: 100%;
        height: 100%;
        display: block;
      }
    `
  ]
})
export class MeshGradientBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>

  @Input() colors: string[] = ['#ffffff', '#f8f9fa', '#e9ecef', '#dee2e6']
  @Input() speed: number = 0.5

  private shaderMount: ShaderMount | null = null
  private isBrowser: boolean

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId)
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.initShader()
    }, 100)
  }

  private initShader(): void {
    const container = this.containerRef?.nativeElement
    if (!container) return

    try {
      // Convert colors to shader format (vec4 arrays)
      const shaderColors = this.colors.map((color) =>
        getShaderColorFromString(color)
      )

      // Pad to 10 colors (max supported)
      while (shaderColors.length < 10) {
        shaderColors.push([1, 1, 1, 1])
      }

      // Create uniforms for mesh gradient
      const uniforms = {
        u_colors: shaderColors,
        u_colorsCount: this.colors.length,
        u_distortion: 0.15,
        u_swirl: 0.1,
        u_grainMixer: 0.02,
        u_grainOverlay: 0.01,
        // Sizing uniforms
        u_worldWidth: 1,
        u_worldHeight: 1,
        u_fit: 2, // cover
        u_scale: 1,
        u_rotation: 0,
        u_offsetX: 0,
        u_offsetY: 0,
        u_originX: 0.5,
        u_originY: 0.5
      }

      // Create shader mount
      this.shaderMount = new ShaderMount(
        container,
        meshGradientFragmentShader,
        uniforms,
        undefined, // webGlContextAttributes
        this.speed // speed
      )
    } catch (error) {
      console.error('Failed to initialize mesh gradient shader:', error)
    }
  }

  ngOnDestroy(): void {
    if (this.shaderMount) {
      this.shaderMount.dispose()
    }
  }
}
