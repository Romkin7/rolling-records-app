<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;

const { data } = await useProducts(apiBaseUri);

// save results as genres, uses computed, to update view and data based using
const products = computed(() => data.value || []);
console.log("Products on Index Page:", products.value);
// SEO
useSeoMeta({
  title: "Rolling Records - Manage Your Vinyl Collection",
  description:
    "Welcome to Rolling Records, your go-to app for managing your vinyl collection with ease and style.",
  robots: "index, follow",
});
</script>
<template>
  <section>
    <h1>Welcome to Rolling Records</h1>
    <p>Your go-to app for managing your vinyl collection.</p>
  </section>
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
