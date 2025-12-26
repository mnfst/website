import { CommonModule, DOCUMENT } from '@angular/common'
import { Component, ElementRef, Inject, ViewChild } from '@angular/core'
import { ClientLogosComponent } from '../../../../../../common/partials/client-logos/client-logos.component'
import {
  UseCase,
  WidgetContainerComponent
} from '../../../../elements/chat-widgets'
import {
  getTabIndexById,
  GrowthTabName,
  trackTabView
} from '../../../../../../core/analytics/analytics.utils'

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [CommonModule, ClientLogosComponent, WidgetContainerComponent],
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.scss']
})
export class UseCasesComponent {
  selectedTab = 'hr'
  @ViewChild('wrapper') wrapperRef!: ElementRef<HTMLDivElement>

  /**
   * Flag pour éviter le tracking au premier render.
   * On ne track que les changements explicites de l'utilisateur,
   * pas l'état initial de la tab.
   */
  private hasUserInteracted = false

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onMouseMove(event: MouseEvent): void {
    const wrapper = this.wrapperRef?.nativeElement
    if (!wrapper) return

    const rect = wrapper.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    // Offset for parallax effect (moves shapes towards cursor)
    const offsetX = (x - 50) * 0.3 // -15px to +15px
    const offsetY = (y - 50) * 0.3

    wrapper.style.setProperty('--mouse-x', `${x}%`)
    wrapper.style.setProperty('--mouse-y', `${y}%`)
    wrapper.style.setProperty('--offset-x', `${offsetX}px`)
    wrapper.style.setProperty('--offset-y', `${offsetY}px`)
  }

  onMouseLeave(): void {
    const wrapper = this.wrapperRef?.nativeElement
    if (!wrapper) return

    wrapper.style.setProperty('--mouse-x', '50%')
    wrapper.style.setProperty('--mouse-y', '50%')
    wrapper.style.setProperty('--offset-x', '0px')
    wrapper.style.setProperty('--offset-y', '0px')
  }

  useCases: UseCase[] = [
    {
      id: 'hr',
      label: 'HR',
      icon: '👥',
      excerpt:
        'Validate PTO requests, answer HR questions, perform emplloyee follow-ups.',
      messages: [
        {
          role: 'user',
          content:
            'From the HRIS, which managers had departures in their teams over the last 12 months?'
        },
        {
          role: 'assistant',
          content:
            'Engineering has the highest attrition with 5 departures under Michael Chen. Sales and Marketing follow with 4 and 3 respectively. Consider scheduling retention interviews with these managers to identify patterns and improve team stability.',
          widget: {
            style: 'hris',
            appBar: {
              name: 'Workforce Hub',
              logo: 'manifest'
            },
            header: {
              title: 'Team Departures',
              subtitle: 'Last 12 months',
              badge: { label: 'Data synced from HRIS', type: 'synced' }
            },
            sections: [
              {
                type: 'stat-grid',
                stats: [
                  { value: 15, label: 'total departures', variant: 'large' },
                  { value: 5, label: 'teams affected' }
                ]
              },
              {
                type: 'bar-chart',
                title: 'Departures by Manager',
                bars: [
                  { name: 'M. Chen', value: 5, variant: 'danger' },
                  { name: 'S. Patel', value: 4, variant: 'warning' },
                  { name: 'J. Wilson', value: 3, variant: 'warning' },
                  { name: 'A. Garcia', value: 2 },
                  { name: 'R. Kim', value: 1 }
                ]
              },
              {
                type: 'data-table',
                accordion: true,
                columns: [
                  { key: 'manager', label: 'Manager' },
                  { key: 'department', label: 'Department' },
                  { key: 'departures', label: 'Departures', align: 'right' }
                ],
                rows: [
                  {
                    manager: { value: 'Michael Chen' },
                    department: { value: 'Engineering' },
                    departures: { value: 5, variant: 'danger', type: 'badge' },
                    _details: [
                      {
                        name: 'Alex Thompson',
                        role: 'Senior Engineer',
                        date: 'Jan 15, 2024'
                      },
                      {
                        name: 'Maria Santos',
                        role: 'Tech Lead',
                        date: 'Mar 22, 2024'
                      },
                      {
                        name: 'David Park',
                        role: 'DevOps Engineer',
                        date: 'May 8, 2024'
                      },
                      {
                        name: 'Lisa Wang',
                        role: 'Frontend Developer',
                        date: 'Aug 30, 2024'
                      },
                      {
                        name: 'Chris Miller',
                        role: 'Backend Developer',
                        date: 'Nov 12, 2024'
                      }
                    ]
                  },
                  {
                    manager: { value: 'Sarah Patel' },
                    department: { value: 'Sales' },
                    departures: { value: 4, variant: 'warning', type: 'badge' },
                    _details: [
                      {
                        name: 'John Davies',
                        role: 'Account Executive',
                        date: 'Feb 5, 2024'
                      },
                      {
                        name: 'Emma Brown',
                        role: 'Sales Rep',
                        date: 'Apr 18, 2024'
                      },
                      { name: 'Kevin Lee', role: 'SDR', date: 'Jul 25, 2024' },
                      {
                        name: 'Rachel Green',
                        role: 'Account Manager',
                        date: 'Oct 3, 2024'
                      }
                    ]
                  },
                  {
                    manager: { value: 'James Wilson' },
                    department: { value: 'Marketing' },
                    departures: { value: 3, variant: 'warning', type: 'badge' },
                    _details: [
                      {
                        name: 'Sophie Turner',
                        role: 'Content Writer',
                        date: 'Mar 1, 2024'
                      },
                      {
                        name: 'Mike Chen',
                        role: 'SEO Specialist',
                        date: 'Jun 14, 2024'
                      },
                      {
                        name: 'Anna White',
                        role: 'Designer',
                        date: 'Sep 20, 2024'
                      }
                    ]
                  },
                  {
                    manager: { value: 'Ana Garcia' },
                    department: { value: 'Product' },
                    departures: { value: 2, type: 'badge' },
                    _details: [
                      {
                        name: 'Tom Harris',
                        role: 'Product Manager',
                        date: 'Apr 28, 2024'
                      },
                      {
                        name: 'Jessica Liu',
                        role: 'UX Researcher',
                        date: 'Aug 15, 2024'
                      }
                    ]
                  },
                  {
                    manager: { value: 'Ryan Kim' },
                    department: { value: 'Operations' },
                    departures: { value: 1, type: 'badge' },
                    _details: [
                      {
                        name: 'Mark Johnson',
                        role: 'Operations Analyst',
                        date: 'Jul 10, 2024'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'sales',
      label: 'Sales',
      icon: '💼',
      excerpt: 'Track pipelines, draft outreach, and close deals faster.',
      messages: [
        {
          role: 'user',
          content: 'Show me the Q4 pipeline and highlight deals at risk'
        },
        {
          role: 'assistant',
          content:
            'You have 3 deals requiring immediate attention. Acme Corp and GlobalFin are critical due to extended inactivity and competitor activity. I recommend scheduling follow-up calls this week.',
          widget: {
            style: 'sales',
            appBar: {
              name: 'SalesOpsHub',
              logo: 'sales'
            },
            header: {
              title: 'Q4 Pipeline Overview',
              subtitle: 'November 2024'
            },
            sections: [
              {
                type: 'pipeline',
                stages: [
                  {
                    id: 'discovery',
                    label: 'Discovery',
                    count: 12,
                    value: '$15.6M'
                  },
                  {
                    id: 'proposal',
                    label: 'Proposal',
                    count: 8,
                    value: '$11M'
                  },
                  {
                    id: 'negotiation',
                    label: 'Negotiation',
                    count: 5,
                    value: '$6.2M',
                    variant: 'warning'
                  },
                  {
                    id: 'closing',
                    label: 'Closing',
                    count: 3,
                    value: '$4.4M',
                    variant: 'success'
                  }
                ]
              },
              {
                type: 'deal-cards',
                deals: [
                  {
                    id: 'deal-1',
                    company: 'Acme Corp',
                    value: '$180,000',
                    stage: 'Negotiation',
                    owner: 'Sarah Chen',
                    nextStep: 'Schedule executive call',
                    daysInStage: 14,
                    health: 'critical'
                  },
                  {
                    id: 'deal-2',
                    company: 'TechStart Inc',
                    value: '$95,000',
                    stage: 'Proposal',
                    owner: 'Mike Johnson',
                    nextStep: 'Re-engage new champion',
                    daysInStage: 8,
                    health: 'at-risk'
                  },
                  {
                    id: 'deal-3',
                    company: 'GlobalFin',
                    value: '$220,000',
                    stage: 'Negotiation',
                    owner: 'Sarah Chen',
                    nextStep: 'Send competitive analysis',
                    daysInStage: 21,
                    health: 'critical'
                  }
                ]
              },
              {
                type: 'action-buttons',
                buttons: [
                  {
                    label: 'Schedule Calls',
                    icon: 'phone',
                    variant: 'primary'
                  },
                  { label: 'Draft Emails', icon: 'email' },
                  { label: 'View Calendar', icon: 'calendar' }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'marketing',
      label: 'Marketing',
      icon: '📣',
      excerpt:
        'Measure campaign performance, optimize conversions, and align content to revenue.',
      messages: [
        {
          role: 'user',
          content:
            'Pull campaign data from our CMS and marketing automation system and show website conversion rates by campaign for the last 30 days.'
        },
        {
          role: 'assistant',
          content:
            'Here are your website conversion rates by campaign for the last 30 days. Spring Promo is leading with a 4.2% conversion rate.',
          widget: {
            style: 'marketing',
            appBar: {
              name: 'DataHub',
              logo: 'marketing'
            },
            header: {
              title: 'Campaign Performance',
              subtitle: 'Last 30 days'
            },
            sections: [
              {
                type: 'bar-chart',
                title: 'Website Conversion Rate by Campaign',
                subtitle: 'Conversion rate (%) from CMS + Marketing Automation',
                theme: 'marketing',
                valueFormat: 'percent',
                bars: [
                  { name: 'Spring Promo', value: 4.2 },
                  { name: 'Product Launch', value: 3.6 },
                  { name: 'Email Nurture', value: 2.9 },
                  { name: 'Paid Search', value: 2.4 },
                  { name: 'Retargeting', value: 1.8 }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'engineering',
      label: 'Engineering & DevOps',
      icon: '🛠️',
      excerpt:
        'Understand what changed, link deployments to errors, and debug faster.',
      messages: [
        {
          role: 'user',
          content:
            "Show recent deployments and the errors that appeared after each. I'm looking for the last 2 days."
        },
        {
          role: 'assistant',
          content:
            'Here are your deployments from the last 2 days. I found 2 releases with errors — the latest deploy (v2.3.1) is causing a 340% spike compared to the previous release.',
          widget: {
            style: 'devops',
            appBar: {
              name: 'SafeStack',
              logo: 'devops'
            },
            header: {
              title: 'Recent Deployments',
              subtitle: 'Last 2 days',
              badge: { label: '2 services with errors', type: 'api' }
            },
            sections: [
              {
                type: 'deployment-timeline',
                deployments: [
                  {
                    id: 'deploy-1',
                    version: 'payment-service v2.3.1',
                    commit: 'a3f7c21',
                    timestamp: 'Today, 2:34 PM',
                    status: 'failed',
                    environment: 'prod',
                    errorCount: 127,
                    warningCount: 3,
                    usersImpacted: 842,
                    errors: [
                      {
                        id: 'err-1',
                        message:
                          'TimeoutException: Stripe webhook handler exceeded 30s timeout',
                        type: 'TimeoutException',
                        count: 98,
                        severity: 'critical',
                        firstSeen: '2:36 PM',
                        affectedEndpoint: '/api/payments/webhook'
                      },
                      {
                        id: 'err-2',
                        message:
                          'NullReferenceException: Customer object was null during checkout',
                        type: 'NullReferenceException',
                        count: 29,
                        severity: 'critical',
                        firstSeen: '2:41 PM',
                        affectedEndpoint: '/api/checkout'
                      }
                    ]
                  },
                  {
                    id: 'deploy-2',
                    version: 'api-gateway v1.8.0',
                    commit: 'b2e9d45',
                    timestamp: 'Today, 10:15 AM',
                    status: 'success',
                    environment: 'prod',
                    errorCount: 0,
                    warningCount: 1
                  },
                  {
                    id: 'deploy-3',
                    version: 'user-service v3.1.2',
                    commit: 'c8f2a67',
                    timestamp: 'Yesterday, 4:22 PM',
                    status: 'success',
                    environment: 'prod',
                    errorCount: 2,
                    usersImpacted: 15,
                    errors: [
                      {
                        id: 'err-3',
                        message:
                          'DatabaseConnectionError: Connection pool exhausted',
                        type: 'DatabaseConnectionError',
                        count: 1,
                        severity: 'critical',
                        firstSeen: '4:45 PM',
                        affectedEndpoint: '/api/users/profile'
                      },
                      {
                        id: 'err-4',
                        message:
                          'AuthTokenExpired: JWT validation failed for refresh token',
                        type: 'AuthTokenExpired',
                        count: 1,
                        severity: 'critical',
                        firstSeen: '4:52 PM',
                        affectedEndpoint: '/api/auth/refresh'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'support',
      label: 'Support',
      icon: '🎧',
      excerpt: 'Resolve tickets, process refunds, and delight customers.',
      messages: [
        {
          role: 'user',
          content:
            'Using the ticketing system, show average first-response time and resolution time by support agent for the last month.'
        },
        {
          role: 'assistant',
          content:
            'Here are your support agent metrics for the last month. Sarah Chen leads with the fastest response time at 8 minutes. The team average has improved 23% compared to last quarter.',
          widget: {
            style: 'hris',
            appBar: {
              name: 'SupportDesk',
              logo: 'support'
            },
            header: {
              title: 'Agent Performance',
              subtitle: 'Last 30 days',
              badge: { label: 'Data from Ticketing System', type: 'synced' }
            },
            sections: [
              {
                type: 'data-table',
                columns: [
                  { key: 'agent', label: 'Agent' },
                  { key: 'firstResponse', label: 'Avg First Response' },
                  { key: 'tickets', label: 'Tickets', align: 'right' }
                ],
                rows: [
                  {
                    agent: { value: 'Sarah Chen' },
                    firstResponse: { value: '8 min', variant: 'success' },
                    tickets: { value: 142, type: 'badge' }
                  },
                  {
                    agent: { value: 'Mike Johnson' },
                    firstResponse: { value: '12 min' },
                    tickets: { value: 98, type: 'badge' }
                  },
                  {
                    agent: { value: 'Emma Davis' },
                    firstResponse: { value: '15 min' },
                    tickets: { value: 87, type: 'badge' }
                  },
                  {
                    agent: { value: 'Alex Turner' },
                    firstResponse: { value: '23 min', variant: 'warning' },
                    tickets: { value: 64, type: 'badge' }
                  }
                ]
              },
              {
                type: 'bar-chart',
                title:
                  'Average Response Time Over the Last 6 Months (in minutes)',
                valueFormat: 'number',
                bars: [
                  { name: 'Jul', value: 12 },
                  { name: 'Aug', value: 10 },
                  { name: 'Sep', value: 9 },
                  { name: 'Oct', value: 11 },
                  { name: 'Nov', value: 8 },
                  { name: 'Dec', value: 18 }
                ]
              }
            ]
          }
        }
      ]
    }
  ]

  // Touch/swipe handling for mobile slider
  private touchStartX = 0
  private touchEndX = 0

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX
    this.handleSwipe()
  }

  private handleSwipe(): void {
    const swipeThreshold = 50
    const diff = this.touchStartX - this.touchEndX

    if (Math.abs(diff) < swipeThreshold) return

    const currentIndex = this.useCases.findIndex(
      (uc) => uc.id === this.selectedTab
    )

    if (diff > 0 && currentIndex < this.useCases.length - 1) {
      // Swipe left - next: utiliser selectTab pour tracker
      this.selectTab(this.useCases[currentIndex + 1].id)
    } else if (diff < 0 && currentIndex > 0) {
      // Swipe right - previous: utiliser selectTab pour tracker
      this.selectTab(this.useCases[currentIndex - 1].id)
    }
  }

  /**
   * Handler de changement de tab avec tracking Vercel Analytics.
   *
   * Protections anti double-event :
   * 1. Ignore si la tab est déjà sélectionnée (pas de changement réel)
   * 2. Ne track pas au premier render grâce au flag hasUserInteracted
   *
   * Le tracking est déclenché ICI (dans le handler) et non dans le template
   * pour garder le JSX propre et la logique métier séparée.
   */
  selectTab(tabId: string): void {
    // Protection : ne rien faire si la tab est déjà active
    if (this.selectedTab === tabId) {
      return
    }

    // Mettre à jour la tab sélectionnée
    this.selectedTab = tabId

    // Marquer qu'une interaction utilisateur a eu lieu
    this.hasUserInteracted = true

    // Tracker l'événement uniquement après une interaction utilisateur
    const useCase = this.useCases.find((uc) => uc.id === tabId)
    if (useCase) {
      const tabIndex = getTabIndexById(this.useCases, tabId)
      const pagePath =
        typeof window !== 'undefined' ? window.location.pathname : '/'

      trackTabView(useCase.label.trim() as GrowthTabName, tabIndex, pagePath)
    }
  }

  getSelectedUseCase(): UseCase {
    return (
      this.useCases.find((uc) => uc.id === this.selectedTab) || this.useCases[0]
    )
  }
}
