<script setup>
import { AisInstantSearch, AisConfigure } from 'vue-instantsearch/vue3/es';
import { useAlgolia } from './composables/useAlgolia.js';
import SearchHeader from './components/SearchHeader.vue';
import ProductGrid from './components/ProductGrid.vue';

const { searchClient, indexName, isConfigured } = useAlgolia();
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <AisInstantSearch
      :search-client="searchClient"
      :index-name="indexName"
      class="flex min-h-screen flex-col"
    >
      <AisConfigure :hitsPerPage="20" />

      <SearchHeader />

      <main class="flex-1">
        <ProductGrid />
      </main>
    </AisInstantSearch>
  </div>
</template>
