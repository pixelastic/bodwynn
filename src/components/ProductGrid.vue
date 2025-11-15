<script setup>
import { ref } from 'vue';
import { AisHits, AisPagination } from 'vue-instantsearch/vue3/es';
import ProductCard from './ProductCard.vue';
import ProductModal from './ProductModal.vue';

const selectedProduct = ref(null);
const isModalOpen = ref(false);

function openProductModal(product) {
  selectedProduct.value = product;
  isModalOpen.value = true;
}

function closeProductModal() {
  isModalOpen.value = false;
  selectedProduct.value = null;
}
</script>

<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Grille de produits -->
    <AisHits
      :class-names="{
        'ais-Hits': 'mb-8',
        'ais-Hits-list': 'grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
      }"
    >
      <template #item="{ item }">
        <ProductCard :product="item" @click="openProductModal(item)" />
      </template>
    </AisHits>

    <!-- Pagination -->
    <AisPagination
      :class-names="{
        'ais-Pagination': 'flex justify-center',
        'ais-Pagination-list': 'flex gap-2',
        'ais-Pagination-item': 'inline-block',
        'ais-Pagination-link':
          'block rounded-lg border-2 border-soft px-4 py-2 text-dark transition hover:bg-soft hover:border-accent',
        'ais-Pagination-item--selected': 'font-bold',
        'ais-Pagination-item--disabled': 'opacity-50 pointer-events-none',
      }"
    />

    <!-- Modale produit -->
    <ProductModal
      v-if="selectedProduct"
      :product="selectedProduct"
      :open="isModalOpen"
      @update:open="closeProductModal"
    />
  </div>
</template>
