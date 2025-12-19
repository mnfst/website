import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ClientLogosComponent } from '../../../../../../common/partials/client-logos/client-logos.component'
import {
  UseCase,
  WidgetContainerComponent
} from '../../../../elements/chat-widgets'

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [CommonModule, ClientLogosComponent, WidgetContainerComponent],
  templateUrl: './use-cases.component.html',
  styleUrl: './use-cases.component.scss'
})
export class UseCasesComponent {
  selectedTab = 'hr'

  useCases: UseCase[] = [
    {
      id: 'hr',
      label: 'HR & People Operations',
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
          content: '',
          widget: {
            style: 'hris',
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
      label: 'Sales & CRM',
      icon: '💼',
      excerpt: 'Track pipelines, draft outreach, and close deals faster.',
      messages: [
        {
          role: 'user',
          content: 'Show me the pipeline for Q4 and highlight deals at risk'
        },
        {
          role: 'assistant',
          content: '',
          widget: {
            style: 'browser',
            header: {
              title: 'Q4 Pipeline Overview',
              urlBar: 'salesforce.com/pipeline/q4-2024',
              badge: { label: 'Live from Salesforce', type: 'live' },
              icon: 'layers'
            },
            sections: [
              {
                type: 'stat-grid',
                stats: [
                  { value: '$2.4M', label: 'Total Pipeline' },
                  { value: 47, label: 'Opportunities', variant: 'accent' },
                  { value: 3, label: 'At Risk', variant: 'danger' }
                ]
              },
              {
                type: 'data-grid',
                rows: [
                  {
                    label: 'Acme Corp - No activity 14 days',
                    value: '$180K',
                    color: '#f87171'
                  },
                  {
                    label: 'TechStart - Champion left',
                    value: '$95K',
                    color: '#fbbf24'
                  },
                  {
                    label: 'GlobalFin - Competitor engaged',
                    value: '$220K',
                    color: '#f87171'
                  }
                ]
              },
              {
                type: 'action-buttons',
                buttons: [
                  {
                    label: 'Draft Outreach',
                    icon: 'email',
                    variant: 'primary'
                  },
                  { label: 'View Timeline', icon: 'clock' }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'marketing',
      label: 'Marketing & Campaigns',
      icon: '📣',
      excerpt: 'Create and schedule campaigns across all your channels.',
      messages: [
        {
          role: 'user',
          content:
            'Create a social media campaign for our Black Friday sale - 30% off all plans'
        },
        {
          role: 'assistant',
          content:
            "I'll create a 5-post campaign across your connected platforms. Here's the first post for Twitter/X:\n\n🔥 Black Friday is HERE!\n\nGet 30% off ALL plans for the next 48 hours.\n\n✅ No code needed\n✅ Applies to annual plans\n✅ Lock in savings forever\n\nDon't miss out → [link]\n\nWant me to schedule all 5 posts now, or review each one first?"
        },
        {
          role: 'user',
          content: 'Schedule them, but space them 4 hours apart'
        },
        {
          role: 'assistant',
          content:
            'Done! 5 posts scheduled starting today at 9 AM:\n\n• 9 AM - Twitter announcement\n• 1 PM - LinkedIn feature highlight\n• 5 PM - Instagram carousel\n• 9 PM - Twitter reminder\n• Tomorrow 9 AM - Final hours push\n\nAll posts are live in your dashboard. Need anything else for the campaign?'
        }
      ]
    },
    {
      id: 'operations',
      label: 'Operations & Logistics',
      icon: '⚙️',
      excerpt: 'Manage shipments, inventory, and supply chain issues.',
      messages: [
        {
          role: 'user',
          content:
            'We have a shipment delay from Shanghai. What orders are affected?'
        },
        {
          role: 'assistant',
          content:
            "I found 23 orders affected by the Shanghai delay (container MSKU-4829371). Here's the breakdown:\n\n• 8 orders due this week - customers need notification\n• 12 orders due next week - can be rerouted via Hong Kong (+2 days)\n• 3 large orders - recommend air freight option\n\nWant me to draft customer notifications and calculate the air freight costs?"
        },
        {
          role: 'user',
          content:
            'Yes, notify customers and get air freight quotes for the 3 large orders'
        },
        {
          role: 'assistant',
          content:
            "I've queued personalized delay notifications for all 23 customers with updated ETAs. For the 3 large orders:\n\n• Order #4521 (MegaCorp): Air freight $1,240 vs $180 sea - saves 8 days\n• Order #4533 (RetailMax): Air freight $890 vs $95 sea - saves 8 days\n• Order #4540 (TechHub): Air freight $1,680 vs $210 sea - saves 8 days\n\nApprove air freight for any of these?"
        }
      ]
    },
    {
      id: 'engineering',
      label: 'Engineering & DevOps',
      icon: '🛠️',
      excerpt: 'Debug issues, trigger rollbacks, and manage incidents.',
      messages: [
        {
          role: 'user',
          content:
            "There's a spike in error rates on the payment service. What's happening?"
        },
        {
          role: 'assistant',
          content:
            "I'm seeing a 340% increase in 500 errors on /api/payments since 2:34 PM. Root cause analysis:\n\n• Error pattern: TimeoutException from Stripe webhook handler\n• Affected: 12% of checkout attempts\n• Started after deploy #4521 (payment-service v2.3.1)\n\nThe issue appears to be a missing retry mechanism in the new webhook handler. Want me to trigger a rollback to v2.3.0?"
        },
        {
          role: 'user',
          content: 'Yes, rollback and notify the team'
        },
        {
          role: 'assistant',
          content:
            "Rollback initiated to payment-service v2.3.0. Status:\n\n✅ Rollback complete (took 47 seconds)\n✅ Error rates returning to baseline\n✅ Slack notification sent to #engineering\n✅ Incident ticket INC-2341 created\n\nI've tagged the v2.3.1 release with needs-fix and assigned it to the payments team. Anything else you need?"
        }
      ]
    },
    {
      id: 'support',
      label: 'Customer Support',
      icon: '🎧',
      excerpt: 'Resolve tickets, process refunds, and delight customers.',
      messages: [
        {
          role: 'user',
          content:
            'Customer says they were charged twice for their subscription. Account ID: 8847'
        },
        {
          role: 'assistant',
          content:
            'I found the issue for account #8847 (jane.smith@email.com). There were indeed 2 charges on Nov 15:\n\n• $49.00 at 10:23 AM - Annual renewal (legitimate)\n• $49.00 at 10:24 AM - Duplicate charge (system error)\n\nThis was caused by a payment retry during a brief gateway timeout. I can process a refund of $49.00 right now. Should I proceed?'
        },
        {
          role: 'user',
          content: 'Yes, refund and send them a confirmation email'
        },
        {
          role: 'assistant',
          content:
            "Done! Here's what I completed:\n\n✅ Refund of $49.00 processed (3-5 business days)\n✅ Confirmation email sent to jane.smith@email.com\n✅ Added $10 account credit as goodwill gesture\n✅ Ticket #8847-R marked resolved\n\nThe customer will see the refund and received our apology email. Is there anything else for this case?"
        }
      ]
    },
    {
      id: 'growth',
      label: 'Growth ',
      icon: '📈',
      excerpt: 'Analyze acquisition channels and optimize conversions.',
      messages: [
        {
          role: 'user',
          content:
            'What are our top performing acquisition channels this month?'
        },
        {
          role: 'assistant',
          content:
            "Here's your acquisition breakdown for November:\n\n1. Organic Search - 2,340 signups (32% of total, +18% MoM)\n2. Paid Social - 1,890 signups (26%, +5% MoM)\n3. Referrals - 1,450 signups (20%, +42% MoM)\n4. Direct - 980 signups (13%)\n5. Email - 640 signups (9%)\n\nReferrals are your fastest growing channel. Want me to analyze what's driving that growth?"
        },
        {
          role: 'user',
          content: 'Yes, and suggest ways to double down on referrals'
        },
        {
          role: 'assistant',
          content:
            'Referral analysis complete. Key drivers:\n\n• New in-app share feature launched Oct 15 → 3x more shares\n• Power users (top 10%) driving 67% of referrals\n• Average referral converts 2.3x faster than paid\n\nRecommendations to scale:\n1. Increase referral reward from $10 to $20 (projected +35% referrals)\n2. Launch tiered rewards for power referrers\n3. Add referral prompt after key milestones\n\nWant me to draft an A/B test plan for the reward increase?'
        }
      ]
    }
  ]

  selectTab(tabId: string): void {
    this.selectedTab = tabId
  }

  getSelectedUseCase(): UseCase {
    return (
      this.useCases.find((uc) => uc.id === this.selectedTab) || this.useCases[0]
    )
  }
}
