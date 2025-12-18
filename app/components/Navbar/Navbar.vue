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
    <NavbarLink to="/products?format=lp">LP:t</NavbarLink>
    <NavbarLink to="/products?format=cd">CD:t</NavbarLink>
    <NavbarLink to="/products?format=7">7"</NavbarLink>
    <NavbarLink to="/products?format=12">12"</NavbarLink>
    <NavbarLink to="/products?format=kasetti">Kasetit</NavbarLink>
    <NavbarLink to="/products?category=Tarjoukset">Tarjoukset</NavbarLink>
    <NavbarLink to="/products?category=lahjakortit">Lahjakortit</NavbarLink>
    <NavbarLink to="/products?category=oheistarvikkeet"
      >Oheistarvikkeet</NavbarLink
    >
    <NavbarLink to="/cart"
      ><v-icon icon="mdi-cart" /> {{ cartStore.items.length }}</NavbarLink
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
