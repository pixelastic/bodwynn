import { liteClient as algoliasearch } from 'algoliasearch/lite';

// Configuration Algolia depuis les variables d'environnement
export const algoliaAppId = import.meta.env.VITE_ALGOLIA_APP_ID || '';
export const algoliaSearchApiKey =
  import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY || '';
export const algoliaIndexName = import.meta.env.VITE_ALGOLIA_INDEX_NAME || '';

// Client Algolia (lite pour de meilleures performances)
export const searchClient = algoliasearch(algoliaAppId, algoliaSearchApiKey);
