import { computed, ref } from 'vue';
import liteClient from 'algoliasearch/lite';
import config from '../config.js';

const { appId, apiKey, indexName } = config.algolia;

export const searchClient = liteClient(appId, apiKey);

export function useAlgolia() {
  const refIndexName = ref(indexName);
  const isConfigured = computed(() => !!refIndexName.value && !!searchClient);

  return {
    searchClient,
    indexName,
    isConfigured,
  };
}
