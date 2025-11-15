<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const firstImage = computed(() => props.product.images?.[0]);
</script>

<template>
  <article
    class="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md active:scale-95"
  >
    <!-- Image produit avec couleur de fond et LQIP -->
    <div
      class="aspect-square overflow-hidden bg-gray-100"
      :style="firstImage?.color ? { backgroundColor: '#' + firstImage.color.hex } : {}"
    >
      <img
        v-if="firstImage"
        :src="firstImage.url"
        :alt="product.title"
        class="h-full w-full object-cover transition group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- Info produit -->
    <div class="p-3">
      <!-- Titre (2 lignes max) -->
      <h3 class="line-clamp-2 text-sm font-medium text-dark">
        {{ product.title }}
      </h3>

      <!-- Prix -->
      <p class="mt-2 text-lg font-bold text-accent">
        {{ product.price }} €
      </p>
    </div>
  </article>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
