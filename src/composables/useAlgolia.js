import { computed, ref } from 'vue';
import { algoliaIndexName, searchClient } from '../config/algolia';

export function useAlgolia() {
  const indexName = ref(algoliaIndexName);
  const isConfigured = computed(() => !!indexName.value && !!searchClient);

  return {
    searchClient,
    indexName,
    isConfigured,
  };
}
