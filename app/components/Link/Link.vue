<script setup lang="ts">
import clsx from "clsx";
interface LinkProps {
  to: string;
  variant: "inline" | "standalone" | "button" | "navigation";
  color: "dark" | "light" | "medium";
}

const props = defineProps<LinkProps>();

const linkClasses = clsx("link", {
  [`link--${props.variant}`]: props.variant,
  [`link--${props.color}`]: props.color,
});
</script>

<template>
  <NuxtLink
    :class="linkClasses"
    :to="props.to"
    rel="noopener noreferrer"
    target="_self"
    referrerpolicy="no-referrer"
  >
    <slot></slot>
  </NuxtLink>
</template>

<style scoped>
.link {
  text-decoration: underline;
}

.link--inline {
  font: var(--rr-typography-link-inline);
  display: inline;
}
.link--standalone {
  font: var(--rr-typography-link-standalone);
  display: block;
}
.link--button {
  font: var(--rr-typography-link-button);
  display: inline-block;
}
.link--navigation {
  font: var(--rr-typography-link-navigation);
  display: inline-block;
}
.link--dark {
  color: var(--rr-color-link-dark);
}
.link--light {
  color: var(--rr-color-link-light);
}
.link--medium {
  color: var(--rr-color-link-medium);
}
</style>
