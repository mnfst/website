import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DomSanitizer } from '@angular/platform-browser'

import { FaqComponent } from './faq.component'

describe('FaqComponent', () => {
  let component: FaqComponent
  let fixture: ComponentFixture<FaqComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqComponent],
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustHtml: () => 'safeString'
          }
        }
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have a list of faqs', () => {
    expect(component.faqs.length).toBeGreaterThan(0)
  })

  it('should have a question and answer for each faq', () => {
    component.faqs.forEach((faq) => {
      expect(faq.question).toBeTruthy()
      expect(faq.answer).toBeTruthy()
    })
  })
})
