// copy-button.component.ts
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Highlight } from 'ngx-highlightjs'
import { liveCodeHeroContent } from '../live-code-hero.content'

@Component({
  selector: 'app-live-code-hero',
  standalone: true,
  imports: [CommonModule, Highlight],
  template: `
    <div>
      <div
        class="card is-shadowless is-bordered p-4 tab-list is-flex is-align-items-flex-start mb-0"
      >
        <div class="tab" *ngFor="let example of examples">
          <span
            class="tag "
            (click)="selectTab(example.label)"
            [ngClass]="
              example.label === selectedTab ? 'is-white-bis' : 'is-white'
            "
          >
            {{ example.label }}
          </span>
        </div>
      </div>

      <div class="ui-ide is-fullwidth is-bordered">
        <div class="ide">
          <div class="sidebar has-text-grey-lighter">
            <div class="sidebar__title">
              <span>explorer</span>
              <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="explorer-item is-small">
              <i class="fa-solid fa-chevron-right"></i>
              <span class="is-uppercase ">My-project</span>
            </div>
            <div class="explorer-item level-2 has-2-children is-parent ">
              <i class="fa-solid fa-chevron-down"></i>
              <i class="lni lni-folder"></i>
              <span class="">manifest</span>
            </div>
            <div class="explorer-item level-3">
              <i class="fa-solid fa-database has-text-info"></i>
              <span class="">backend.db</span>
            </div>
            <div class="explorer-item level-3 is-active">
              <i
                class="fa-solid fa-exclamation has-text-primary-light is-italic"
              ></i>
              <span class="">backend.yml</span>
            </div>
            <div class="explorer-item is-parent level-2">
              <i class="fa-solid fa-chevron-right"></i>
              <i class="lni lni-folder"></i>
              <span class="">node_modules</span>
            </div>
            <div class="explorer-item is-parent level-2">
              <i class="fa-solid fa-chevron-right"></i>
              <i class="lni lni-folder"></i>
              <span class="">frontend</span>
            </div>
            <div class="explorer-item level-2">
              <i class="fa-solid fa-gear has-text-grey-light"></i>
              <span class="">.env</span>
            </div>
            <div class="explorer-item level-2">
              <i class="fa-brands fa-git-alt has-text-danger"></i>
              <span class="">.gitignore</span>
            </div>
            <div class="explorer-item level-2">
              <i class="has-text-info is-regular has-text-warning">
                &#123;&#125;
              </i>
              <span class="">package.json</span>
            </div>
            <div class="explorer-item level-2">
              <i class="fa-solid fa-circle-info"></i>
              <span class="">README.md</span>
            </div>
          </div>
          <div class="editor-container">
            <div class="tab-template">
              <div class="tab-ide">
                <i
                  class="fa-solid fa-exclamation has-text-primary-light is-italic"
                ></i>
                <span>backend.yml</span>
                <span class="is-size-8 pt-1 has-text-grey-light">
                  manifest/backend.yml
                </span>
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="toolbar has-text-grey">
                <i class="fa-solid fa-code-compare"></i>
                <i class="fa-solid fa-table-columns"></i>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div class="editor-template">
              <div class="line-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
              </div>
              <div class="code">
                <!-- Editor -->
                <ng-container *ngFor="let example of examples">
                  <ng-container *ngIf="example.label === selectedTab">
                    <pre class="mt-0 pre--hero">
                      <code [highlight]="example.content" language="yaml" class="language-yaml"></code></pre>
                    <div class="buttons buttons--demo">
                      <a
                        class="button is-small is-light "
                        [href]="example.demoUrl"
                        target="_blank"
                      >
                        <i class="fa-solid fa-table-columns mr-2"></i>
                        <span>Admin panel live demo</span>
                      </a>
                      <a
                        class="button is-small is-light "
                        href="{{ example.demoUrl }}/api"
                        target="_blank"
                      >
                        <i class="fa-solid fa-cloud-arrow-down mr-2"></i>
                        <span>REST API doc</span>
                      </a>
                    </div>
                  </ng-container>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LiveCodeHeroComponent {
  examples: {
    label: string
    content: string
    demoUrl?: string
  }[] = liveCodeHeroContent

  selectedTab: string = this.examples[0].label

  selectTab(label: string) {
    this.selectedTab = label
  }
}
