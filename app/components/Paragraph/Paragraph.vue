<script setup lang="ts">
import clsx from "clsx";

interface ParagraphProps {
  color: "dark" | "light" | "medium";
  variant: "preamble" | "body" | "caption";
}
const props = defineProps<ParagraphProps>();

const paragrapgClasses = computed(() => {
  return clsx({
    [`paragraph--${props.color}`]: props.color,
    [`paragraph--${props.variant}`]: props.variant,
  });
});
</script>
<template>
  <p :class="paragrapgClasses"><slot /></p>
</template>
<style scoped>
.paragraph--color-dark {
  font: var(--rr-color-text-dark);
}
.paragraph--color-medium {
  font: var(--rr-color-text-medium);
}
.paragraph--color-light {
  font: var(--rr-color-text-light);
}
.paragraph--variant-preamble {
  font: var(--rr-typography-paragraph-preamble);
}
.paragraph--variant-body {
  font: var(--rr-typography-paragraph-body);
}
.paragraph--variant-caption {
  font: var(--rr-typography-paragraph-caption);
}
</style>
