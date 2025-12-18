<script setup lang="ts">
import type { Product } from "@/@types/product";

interface ProductCardProps {
  product: Product;
}
const props = defineProps<ProductCardProps>();
console.log("Product in ProductCard:", props.product);
</script>

<template>
  <v-card density="compact" variant="elevated">
    <v-img :src="props.product.cover" :alt="props.product.title"></v-img>
    <v-card-subtitle
      >{{ props.product.category }}, {{ props.product.format }}</v-card-subtitle
    >
    <v-card-title>{{ props.product.title }}</v-card-title>
    <v-card-subtitle>{{ props.product.name }}</v-card-subtitle>
    <v-card-text> Hinta: {{ props.product.unit_price }} € </v-card-text>
    <v-card-actions class="d-flex justify-space-between">
      <v-btn :to="`/products/${props.product._id}`" text>Katso tuotetta</v-btn>
      <Button
        :color="'success'"
        :rounded="true"
        :size="'medium'"
        v-on:click="$emit('click')"
      >
        <v-icon icon="mdi-cart-plus" />
      </Button>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
