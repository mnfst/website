# MCP Hero Component Specification

## Component Overview

A hero component for the home page promoting Manifest's new MCP (Model Context Protocol) server functionality. The component will be positioned prominently on the home page with a left-right layout structure.

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    MCP Hero Section                         │
├──────────────────────────┬──────────────────────────────────┤
│       Content Area       │         Visual Area              │
│       (Left 50%)         │         (Right 50%)              │
│                          │                                  │
│  ┌────────────────────┐  │  ┌────────────────────────────┐  │
│  │   Hero Content     │  │  │       Diagram/Image        │  │
│  │                    │  │  │                            │  │
│  │  - Main Headline   │  │  │    SQL/PostgreSQL          │  │
│  │  - Subheadline     │  │  │         ↓                  │  │
│  │  - Description     │  │  │     Manifest               │  │
│  │  - CTA Button      │  │  │         ↓                  │  │
│  │  - Backend Logos   │  │  │       MCP                  │  │
│  └────────────────────┘  │  │         ↓                  │  │
│                          │  │    Your Agent              │  │
│                          │  └────────────────────────────┘  │
└──────────────────────────┴──────────────────────────────────┘
```

## Content Specification

### Main Headline

- **Primary**: "Turn your data into a secure MCP server in minutes"
- **Secondary**: "Open Source MCP-as-a-Service"
- Typography: Use existing title styling (likely `.title.is-0` or `.title.is-1`)
- Include gradient styling for key terms like "MCP server" or "minutes"

### Subheadline Options

- **Option 1**: "Manifest turns your database into a secure MCP server that AI agents can connect to in minutes"
- **Option 2**: "Manifest turns your database into a secure MCP server allowing to integrate AI Agents 10x faster"
- Typography: Use subtitle styling (likely `.subtitle` or `.title.is-4`)

### Visual Diagram Requirements

- **Flow diagram showing**:
  - Database sources (SQL, PostgreSQL, Snowflake, Oracle, etc.)
  - Arrow pointing to Manifest
  - Arrow pointing to MCP
  - Arrow pointing to "Your Agent"
- **Style**: Match existing diagram aesthetic from `diagram-cover` component
- **Placement**: Right side of the hero section

### Call-to-Action

- **Button text**: "Get a demo"
- **Button style**: Primary button styling (likely `.button.is-dark` or `.button.is-primary`)
- **Action**: Should trigger demo request or contact form

### Backend Logos Section

- **Label**: "Backend by"
- **Content**: Display 3 partner/technology logos
- **Layout**: Horizontal arrangement below the CTA button
- **Styling**: Small, muted logos with proper spacing

## Technical Implementation

### Component Structure

```typescript
// File: client/src/app/modules/website/pages/home/elements/mcp-hero/mcp-hero.component.ts
@Component({
  selector: 'app-mcp-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mcp-hero.component.html',
  styleUrls: ['./mcp-hero.component.scss']
})
export class McpHeroComponent {
  onGetDemo(): void {
    // Handle demo request action
  }
}
```

### HTML Template Structure

```html
<section class="hero-mcp">
  <div class="container">
    <div class="columns is-vcentered">
      <!-- Content Column -->
      <div class="column is-6">
        <div class="hero-mcp__content">
          <h1 class="title is-1">
            Turn your data into a secure
            <span class="title-gradient">MCP server</span> in minutes
          </h1>
          <p class="hero-mcp__description">
            Manifest turns databases into secure MCP servers for AI agents.
          </p>
          <div class="hero-mcp__actions">
            <button class="button is-dark is-large" (click)="onGetDemo()">
              Get a demo
            </button>
          </div>
          <div class="hero-mcp__partners">
            <span class="hero-mcp__partners-label">Backend by</span>
            <div class="hero-mcp__partner-logos">
              <!-- Partner logos -->
            </div>
          </div>
        </div>
      </div>

      <!-- Visual Column -->
      <div class="column is-6">
        <div class="hero-mcp__visual">
          <div class="mcp-flow-diagram">
            <!-- Flow diagram implementation -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Styling Guidelines (SCSS)

```scss
.hero-mcp {
  padding: 4rem 0;
  background: $white-ter; // Match existing hero background

  &__content {
    padding-right: 2rem;

    @include mobile {
      padding-right: 0;
      margin-bottom: 2rem;
    }
  }

  &__description {
    font-size: $size-5;
    color: $grey-dark;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  &__actions {
    margin-bottom: 3rem;
  }

  &__partners {
    display: flex;
    align-items: center;
    gap: 1rem;

    &-label {
      font-size: $size-7;
      color: $grey;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  &__partner-logos {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    img {
      height: 24px;
      opacity: 0.6;
      filter: grayscale(100%);
      transition: opacity 0.3s ease, filter 0.3s ease;

      &:hover {
        opacity: 1;
        filter: grayscale(0%);
      }
    }
  }

  &__visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// Flow diagram styles
.mcp-flow-diagram {
  // Implement diagram styling matching existing design patterns
  // Use similar styling to diagram-cover component
}
```

## Integration Points

### Home Component Integration

- Add `McpHeroComponent` to imports in `home.component.ts`
- Insert `<app-mcp-hero></app-mcp-hero>` in `home.component.html`
- Position after existing hero section and before `app-diagram-cover`

### Responsive Behavior

- **Desktop**: Side-by-side layout (50/50 split)
- **Tablet**: Stacked layout with content first, then visual
- **Mobile**: Stacked layout with reduced spacing

### Accessibility Requirements

- Proper heading hierarchy (h1, h2)
- Alt text for logos and diagrams
- Keyboard navigation for CTA button
- Color contrast compliance
- Screen reader friendly structure

## Assets Needed

1. MCP flow diagram SVG or component
2. Partner/backend provider logos (3 logos)
3. Any custom icons for database types in diagram

## Performance Considerations

- Lazy load partner logos
- Optimize diagram assets
- Consider intersection observer for animations
- Ensure component doesn't impact core web vitals
