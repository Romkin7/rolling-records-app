<script setup lang="ts">
import type { Product } from "@/@types/product";
import { v } from "vue-router/dist/router-CWoNjPRp.mjs";

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
    <v-if v-if="product.discounted_price">
      <v-card-text>
        <PriceTag color="dark" textDecoration="line-through">
          {{ product.unit_price }} €
        </PriceTag>
        <PriceTag color="error" textDecoration="normal">
          Säästä: {{ product.unit_price - product.discounted_price }} €
        </PriceTag>
      </v-card-text>
    </v-if>
    <v-card-actions class="d-flex justify-space-between">
      <v-btn :to="`/products/${product.slug}`" text>Näytä</v-btn>
      <Button
        :color="'success'"
        :rounded="true"
        :size="'medium'"
        @click.stop="$emit('add-to-cart')"
      >
        <v-icon icon="mdi-cart-plus" />
        <PriceTag color="light"
          >{{ product.discounted_price || product.unit_price }} €</PriceTag
        >
      </Button>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
