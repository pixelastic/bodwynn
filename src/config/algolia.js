import { liteClient as algoliasearch } from 'algoliasearch/lite';

// Configuration Algolia (hardcodée)
export const algoliaAppId = 'O3F8QXYK6R';
export const algoliaSearchApiKey = 'cb2112936ba6a63425b17cda5ddbbbf6';
export const algoliaIndexName = 'bodwynn';

// Client Algolia (lite pour de meilleures performances)
export const searchClient = algoliasearch(algoliaAppId, algoliaSearchApiKey);
