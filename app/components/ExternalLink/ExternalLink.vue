<script setup lang="ts">
import clsx from "clsx";

interface ExternalLinkProps {
  href: string;
  variant: "inline" | "standalone" | "button" | "navigation";
  color: "dark" | "light" | "medium";
}

const props = defineProps<ExternalLinkProps>();

const linkClasses = clsx("link", {
  [`external-link--${props.variant}`]: props.variant,
  [`external-link--${props.color}`]: props.color,
});
</script>

<template>
  <a
    v-bind:href="props.href"
    target="_blank"
    rel="noopener noreferrer"
    :class="linkClasses"
  >
    <slot></slot>
  </a>
</template>

<style scoped>
.external-link {
  text-decoration: underline;
}

.external-link--inline {
  font: var(--rr-typography-link-inline);
  display: inline;
}
.external-link--standalone {
  font: var(--rr-typography-link-standalone);
  display: block;
}
.external-link--button {
  font: var(--rr-typography-link-button);
  display: inline-block;
}
.external-link--navigation {
  font: var(--rr-typography-link-navigation);
  display: inline-block;
}
.external-link--dark {
  color: var(--rr-color-link-dark);
}
.external-link--light {
  color: var(--rr-color-link-light);
}
.external-link--medium {
  color: var(--rr-color-link-medium);
}
</style>
