<script setup lang="ts">
import type { ProductsResponse } from "@/@types/product";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;
const { data, pending } = await useProducts(apiBaseUri, false);

// save results as genres, uses computed, to update view and data based using
const products = computed(
  () => (data.value as ProductsResponse).products || []
);
// SEO
useSeoMeta({
  title: "Rolling Records - Manage Your Vinyl Collection",
  description:
    "Welcome to Rolling Records, your go-to app for managing your vinyl collection with ease and style.",
  robots: "index, follow",
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <Heading variant="title1" color="dark" tag="h1"
          >Rolling Records - Viimeisimmät</Heading
        >
      </v-col>
    </v-row>
    <v-row v-if="pending">
      <v-col cols="12">
        <v-skeleton-loader type="article" />
      </v-col>
    </v-row>
    <v-row v-else-if="products.length === 0">
      <v-col cols="4">
        <v-alert type="info">Ei tuotteita näytettäväksi.</v-alert>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="product in products"
        :key="product._id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <NuxtLink :to="`/products/${product.slug}`">
          <ProductCard
            :product="product"
            v-on:add-to-cart="cartStore.addToCart(product)"
          />
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
section {
  padding: 2rem;
}
h1 {
  font: var(--rr-typography-heading-title1);
  color: var(--rr-color-text-dark);
  margin-bottom: 1rem;
}
p {
  font: var(--rr-typography-paragraph-preamble);
  color: var(--rr-color-text-dark);
}
</style>
