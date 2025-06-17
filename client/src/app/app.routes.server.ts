import { RenderMode, ServerRoute } from '@angular/ssr'

export const serverRoutes: ServerRoute[] = [
  // ...integrations.map((integration: Integration) => ({
  //   path: `integrations/${integration.slug}`,
  //   renderMode: RenderMode.Prerender as RenderMode.Prerender
  // })),

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
]
