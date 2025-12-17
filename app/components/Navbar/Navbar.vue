<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
</script>

<template>
  <v-app-bar :elevation="2" class="navbar">
    <RouterLink to="/">
      <v-img
        src="/images/logo.png"
        alt="Rolling Records Logo Icon"
        contain
        max-height="100"
        max-width="40"
      ></v-img>
    </RouterLink>
    <RouterLink to="/">
      <v-avatar
        variant="flat"
        style="background-color: transparent"
        size="60"
        class="mr-2"
      >
        <v-img
          src="/images/logo.png"
          alt="Rolling Records Logo"
          contain
          max-height="40"
          max-width="80"
        ></v-img>
      </v-avatar>
    </RouterLink>
    <v-app-bar-title>Rolling Records </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn text><RouterLink to="/products?format=lp">LP:t</RouterLink></v-btn>
    <v-btn text><RouterLink to="/products?format=cd">CD:t</RouterLink></v-btn>
    <v-btn text><RouterLink to="/products?format=7">7"</RouterLink></v-btn>
    <v-btn text><RouterLink to="/products?format=12">12"</RouterLink></v-btn>
    <v-btn text
      ><RouterLink to="/products?format=kasetti">Kasetit</RouterLink></v-btn
    >
    <v-btn text
      ><RouterLink to="/products?category=tarjoukset"
        >Tarjoukset</RouterLink
      ></v-btn
    >
    <v-btn text
      ><RouterLink to="/products?category=lahjakortit"
        >Lahjakortit</RouterLink
      ></v-btn
    >
    <v-btn text
      ><RouterLink to="/products?category=oheistarvikkeet"
        >Oheistarvikkeet</RouterLink
      ></v-btn
    >
    <v-btn text
      ><RouterLink to="/cart"
        ><v-icon icon="mdi-cart" /> {{ cartStore.items.length }}</RouterLink
      ></v-btn
    >
    <template v-slot:append>
      <v-app-bar-nav-icon class="d-md-none"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar.v-toolbar,
.navbar {
  background-color: var(--rr-color-brand-primary);
  color: var(--rr-color-link-light);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
