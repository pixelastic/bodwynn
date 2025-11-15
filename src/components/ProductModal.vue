<script setup>
import { ref, computed } from 'vue';
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from 'reka-ui';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:open']);

// Carousel state
const currentImageIndex = ref(0);
const currentImage = computed(() => props.product?.images[currentImageIndex.value]);

const nextImage = () => {
  if (currentImageIndex.value < props.product.images.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

// Décoder HTML entities (&#39; -> ')
const decodedDescription = computed(() => {
  if (!props.product?.description) return '';
  const txt = document.createElement('textarea');
  txt.innerHTML = props.product.description;
  return txt.value;
});
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogPortal>
      <!-- Overlay (fond sombre avec blur) -->
      <DialogOverlay
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />

      <!-- Contenu de la modale -->
      <DialogContent
        class="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-6 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
      >
        <!-- Bouton fermer -->
        <DialogClose
          class="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-dark"
          aria-label="Fermer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </DialogClose>

        <!-- Carousel d'images -->
        <div class="relative mb-6 aspect-square overflow-hidden rounded-lg bg-gray-100">
          <!-- Image actuelle avec couleur de fond -->
          <div
            v-if="currentImage"
            class="h-full w-full"
            :style="{ backgroundColor: '#' + currentImage.color.hex }"
          >
            <img
              :src="currentImage.url"
              :alt="product.title"
              class="h-full w-full object-cover"
            />
          </div>

          <!-- Bouton Précédent -->
          <button
            v-if="currentImageIndex > 0"
            @click="prevImage"
            class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white active:scale-95"
            aria-label="Image précédente"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M10 12L6 8L10 4" />
            </svg>
          </button>

          <!-- Bouton Suivant -->
          <button
            v-if="currentImageIndex < product.images.length - 1"
            @click="nextImage"
            class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white active:scale-95"
            aria-label="Image suivante"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 4L10 8L6 12" />
            </svg>
          </button>

          <!-- Indicateur de position -->
          <div
            class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white"
          >
            {{ currentImageIndex + 1 }} / {{ product.images.length }}
          </div>
        </div>

        <!-- Titre -->
        <DialogTitle class="mb-2 pr-8 text-2xl font-bold text-dark">
          {{ product.title }}
        </DialogTitle>

        <!-- Prix -->
        <p class="mb-4 text-3xl font-bold text-accent">
          {{ product.price }} €
        </p>

        <!-- Tags -->
        <div v-if="product.tags && product.tags.length > 0" class="mb-4 flex flex-wrap gap-2">
          <span
            v-for="tag in product.tags"
            :key="tag"
            class="rounded-full bg-soft px-3 py-1 text-sm text-dark"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Matériaux -->
        <div v-if="product.materials && product.materials.length > 0" class="mb-4">
          <p class="text-sm font-semibold text-dark">Matériaux :</p>
          <p class="text-sm text-gray-600">
            {{ product.materials.join(', ') }}
          </p>
        </div>

        <!-- Description -->
        <DialogDescription
          v-if="decodedDescription"
          class="mb-6 whitespace-pre-line text-gray-700"
        >
          {{ decodedDescription }}
        </DialogDescription>

        <!-- Bouton Etsy -->
        <a
          :href="product.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-6 block w-full rounded-lg bg-secondary py-3 text-center font-semibold text-white transition hover:bg-secondary/90 active:scale-95"
        >
          🔗 Voir sur Etsy
        </a>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
