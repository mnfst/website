import { track } from '@vercel/analytics'

/**
 * Liste des tabs disponibles dans la section Use Cases.
 * Utiliser cette constante pour garantir la cohérence entre UI et tracking.
 * L'ajout d'une nouvelle tab ici la rend automatiquement disponible partout.
 */
export const GROWTH_TABS = [
  'Growth',
  'HR',
  'Sales',
  'Marketing',
  'Engineering & DevOps',
  'Support'
] as const

export type GrowthTabName = (typeof GROWTH_TABS)[number]

/**
 * Interface pour les données de tracking d'une tab.
 * Respecte les limites Vercel : pas de données imbriquées, valeurs primitives uniquement.
 */
interface TabViewEventData {
  tab_name: GrowthTabName
  tab_index: number
  section: string
  page_path: string
}

/**
 * Envoie un événement "tab_view" à Vercel Analytics.
 *
 * Pourquoi une fonction utilitaire séparée ?
 * - Centralise la logique de tracking (DRY)
 * - Facilite les tests et le debugging
 * - Garantit un format d'event stable et cohérent
 * - Permet d'ajouter facilement du logging ou des conditions
 *
 * @param tabName - Nom exact de la tab (doit correspondre à GROWTH_TABS)
 * @param tabIndex - Index 0-based de la tab
 * @param pagePath - Chemin de la page courante (ex: "/", "/pricing")
 */
export function trackTabView(
  tabName: GrowthTabName,
  tabIndex: number,
  pagePath: string
): void {
  const eventData: TabViewEventData = {
    tab_name: tabName,
    tab_index: tabIndex,
    section: 'usecases',
    page_path: pagePath
  }

  track('tab_view', eventData as unknown as Record<string, string | number>)
}

/**
 * Récupère l'index d'une tab par son ID.
 * Retourne -1 si la tab n'est pas trouvée.
 */
export function getTabIndexById(
  tabs: readonly { id: string }[],
  tabId: string
): number {
  return tabs.findIndex((tab) => tab.id === tabId)
}
