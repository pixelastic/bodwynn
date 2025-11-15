<script setup>
import { AisSearchBox } from 'vue-instantsearch/vue3/es';
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-gray-50 shadow-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center gap-3">
        <!-- Logo -->
        <img
          src="../assets/logo.png"
          alt="Bodwynn"
          class="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
        />

        <!-- Barre de recherche Algolia -->
        <AisSearchBox
          placeholder="Rechercher des articles..."
          class="flex-1"
          :class-names="{
            'ais-SearchBox': 'w-full',
            'ais-SearchBox-form': 'flex gap-2',
            'ais-SearchBox-input':
              'flex-1 rounded-lg border-2 border-soft px-4 py-2 text-dark placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
            'ais-SearchBox-submit': 'hidden',
            'ais-SearchBox-reset':
              'rounded-lg bg-secondary px-3 py-2 text-white transition hover:bg-secondary/90 active:scale-95',
          }"
        />
      </div>
    </div>
  </header>
</template>
