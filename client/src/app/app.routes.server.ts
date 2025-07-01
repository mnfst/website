import { RenderMode, ServerRoute } from '@angular/ssr'
import { integrations } from './modules/website/resources/integration/integrations.content'

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  ...integrations.map(
    (integration) =>
      ({
        path: `integrations/${integration.slug}`,
        renderMode: RenderMode.Prerender
      } as ServerRoute)
  ),
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
]
