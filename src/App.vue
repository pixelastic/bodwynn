<script setup>
import { AisInstantSearch, AisConfigure } from 'vue-instantsearch/vue3/es';
import { useAlgolia } from './composables/useAlgolia';
import SearchHeader from './components/SearchHeader.vue';
import ProductGrid from './components/ProductGrid.vue';

const { searchClient, indexName, isConfigured } = useAlgolia();
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Message si Algolia n'est pas configuré -->
    <div
      v-if="!isConfigured"
      class="flex min-h-screen items-center justify-center p-4"
    >
      <div class="max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-dark">
          Configuration Algolia manquante
        </h2>
        <p class="text-gray-600">
          Veuillez créer un fichier <code class="rounded bg-gray-100 px-2 py-1">.env</code>
          à la racine du projet avec vos identifiants Algolia.
        </p>
        <p class="mt-4 text-sm text-gray-500">
          Voir <code class="rounded bg-gray-100 px-1">.env.example</code> pour un exemple.
        </p>
      </div>
    </div>

    <!-- Application principale avec InstantSearch -->
    <AisInstantSearch
      v-else
      :search-client="searchClient"
      :index-name="indexName"
      class="flex min-h-screen flex-col"
    >
      <!-- Configuration par défaut -->
      <AisConfigure :hitsPerPage="20" />

      <!-- Header sticky -->
      <SearchHeader />

      <!-- Grille de produits -->
      <main class="flex-1">
        <ProductGrid />
      </main>
    </AisInstantSearch>
  </div>
</template>
