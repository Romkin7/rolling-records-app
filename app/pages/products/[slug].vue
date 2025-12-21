<script setup lang="ts">
import type { Product, ProductResponse } from "@/@types/product";
import { useCartStore } from "@/stores/cart";

const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;

const route = useRoute();
const cartStore = useCartStore();
const loading = ref(false);
const { data, error, refresh } = await useProducts(
  apiBaseUri,
  true,
  route.params.slug as string
);

const product = computed<Product>(() => {
  return (data.value as ProductResponse).product as Product;
});
</script>

<template>
  <v-container>
    <v-row v-if="loading">
      <v-col cols="4" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else-if="product === null" justify="center" align="center">
      <v-col cols="8" class="text-center">
        <h1>Tuotetta ei löytynyt</h1>
        <router-link to="/products">Palaa etusivulle</router-link>
      </v-col>
    </v-row>
    <v-row v-else-if="error" justify="center" align="center">
      <v-col cols="8" class="text-center">
        <h1>Tapahtui virhe: {{ error }}</h1>
        <router-link to="/products">Palaa etusivulle</router-link>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <h1>{{ product.fullname }}</h1>
      </v-col>
      <v-col cols="4">
        <v-img :src="product.cover" :alt="product.fullname" max-width="100%" />
        <p>{{ product.description }}</p>
      </v-col>
      <v-col cols="4" v-if="product.tracklist && product.tracklist.length">
        <h2>Kappalelista</h2>
        <v-list>
          <v-list-item v-for="(track, index) in product.tracklist" :key="index">
            <v-list-item-title>{{ index + 1 }}. {{ track }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="4">
        <h2>Tuotetiedot</h2>
        <v-list>
          <v-list-item>
            <v-list-item-title>Levyyhtiö:</v-list-item-title>
            <v-list-item-subtitle>{{ product.label }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item
            ><v-list-item-title>Formaatti:</v-list-item-title>
            <v-list-item-subtitle>{{
              product.format
            }}</v-list-item-subtitle></v-list-item
          >
          <v-list-item
            ><v-list-item-title>Kategoria:</v-list-item-title>
            <v-list-item-subtitle>{{
              product.category
            }}</v-list-item-subtitle></v-list-item
          >
          <v-list-item
            ><v-list-item-title>Genre:</v-list-item-title>
            <v-list-item-subtitle>{{
              product.genre
            }}</v-list-item-subtitle></v-list-item
          >
          <v-list-item
            ><v-list-item-title>Vuosi:</v-list-item-title>
            <v-list-item-subtitle>{{
              product.year
            }}</v-list-item-subtitle></v-list-item
          >
          <v-list-item
            ><v-list-item-title>Painos:</v-list-item-title>
            <v-list-item-subtitle>{{
              product.edition
            }}</v-list-item-subtitle></v-list-item
          >
        </v-list>
        <Button
          :color="'success'"
          :rounded="true"
          :size="'medium'"
          v-on:click="cartStore.addToCart(product)"
          ><v-icon icon="mdi-cart-plus" /> {{ product.unit_price }} €</Button
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-list-item-subtitle {
  color: var(--rr-color-text-dark) !important;
}
</style>
