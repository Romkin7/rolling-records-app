<script setup lang="ts">
import type { Product } from "@/@types/product";

interface ProductCardProps {
  product: Product;
}
const { product } = defineProps<ProductCardProps>();
</script>

<template>
  <v-card density="compact" variant="elevated">
    <v-img :src="product.cover" :alt="product.title"></v-img>
    <v-card-subtitle
      >{{ product.category }}, {{ product.format }}</v-card-subtitle
    >
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-subtitle>{{ product.name }}</v-card-subtitle>
    <v-card-text> Hinta: {{ product.unit_price }} € </v-card-text>
    <v-card-actions class="d-flex justify-space-between">
      <v-btn :to="`/products/${product.slug}`" text>Näytä</v-btn>
      <Button
        :color="'success'"
        :rounded="true"
        :size="'medium'"
        @click.stop="$emit('click')"
      >
        <v-icon icon="mdi-cart-plus" />
        {{ product.unit_price }} €
      </Button>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
