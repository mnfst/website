// copy-button.component.ts
import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-copy-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="is-flex is-justify-content-space-between is-flex-direction-column has-background-blurred p-2"
    >
      <div class="is-flex is-align-items-flex-start mb-0">
        <div class="tab mr-2" *ngFor="let assistant of assistants">
          <span
            class="tag tag--ide is-clickable px-4"
            (click)="selectedAssistant = assistant; generateCommand()"
            [ngClass]="
              assistant === selectedAssistant ? 'is-active' : 'is-white'
            "
          >
            <ng-container [ngSwitch]="assistant">
              <ng-container *ngSwitchCase="'cursor'">
                <img
                  src="/assets/images/logo-cursor.svg"
                  alt="Cursor"
                  width="94"
                />
              </ng-container>
              <ng-container *ngSwitchCase="'copilot'">
                <img
                  src="/assets/images/logo-copilot.svg"
                  alt="Copilot"
                  width="150"
                />
              </ng-container>
              <ng-container *ngSwitchCase="'windsurf'">
                <img
                  src="/assets/images/logo-windsurf.svg"
                  alt="Windsurf"
                  width="104"
                />
              </ng-container>

              <ng-container *ngSwitchCase="'none'">
                <span class="icon is-small mr-1">
                  <i class="fa fa-code"></i>
                </span>
                Terminal
              </ng-container>
            </ng-container>
          </span>
        </div>
      </div>

      <div class="is-flex is-justify-content-flex-start mt-2 is-fullwidth">
        <div
          class="is-flex is-align-items-center is-justify-content-flex-start npx-wrapper is-fullwidth"
        >
          <div
            class="is-rounded is-clipped is-flex is-full-height is-align-items-center p-0 has-text-dark has-shadow-success install-wrap has-background-white is-fullwidth"
          >
            <i class="px-4 fa fa-chevron-right is-size-8"></i>
            <span
              class="py-4 install-code is-fullwidth is-flex is-align-items-flex-start"
              >{{ command }}</span
            >
            <a
              [ngClass]="{ copied: copied }"
              (click)="copyToClipboard()"
              aria-label="Copy to clipboard"
              class="icon-text px-4 has-background-white py-2 is-flex is-align-items-center has-text-dark is-relative is-align-self-stretch"
            >
              <span class="icon" aria-hidden="true">
                <svg
                  *ngIf="!copied"
                  class="copy-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  fill="#000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                  />
                </svg>
                <svg
                  *ngIf="copied"
                  class="check-icon has-text-success"
                  xmlns="http://www.w3.org/2000/svg"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  fill="#2be1b7"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CopyButtonComponent implements OnInit {
  @Input() projectName: string
  @Input() backendFilePath: string

  assistants: string[] = ['cursor', 'copilot', 'windsurf', 'none']

  selectedAssistant: string = 'cursor'

  command: string
  copied = false

  ngOnInit(): void {
    this.generateCommand()
  }

  generateCommand() {
    this.command = `yarn create manifest ${this.projectName || 'my-project'}${
      this.selectedAssistant !== 'none' ? ' --' + this.selectedAssistant : ''
    }${this.backendFilePath ? ' --backendFile=' + this.backendFilePath : ''}`
  }

  copyToClipboard() {
    // Use the Clipboard API
    navigator.clipboard.writeText(this.command).then(() => {
      this.showCopiedState()
    })
  }

  private showCopiedState() {
    this.copied = true

    // Reset to default state after 2 seconds
    setTimeout(() => {
      this.copied = false
    }, 2000)
  }
}
