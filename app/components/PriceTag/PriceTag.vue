<script setup lang="ts">
import clsx from "clsx";

interface PriceTagProps {
  color: "error" | "success" | "dark" | "light";
  textDecoration?: "line-through" | "normal";
}
const props = defineProps<PriceTagProps>();

const priceTagClasses = computed(() => {
  console.log(props.textDecoration);
  return clsx({
    pricetag: true,
    [`pricetag--${props.color}`]: props.color,
    "pricetag--line-through": props.textDecoration === "line-through",
  });
});
</script>
<template>
  <p :class="priceTagClasses"><slot /></p>
</template>
<style scoped>
.pricetag {
  font: var(--rr-typography-paragraph-price);
}
.pricetag--error {
  color: var(--rr-color-semantic-error);
}
.pricetag--success {
  color: var(--rr-color-semantic-success);
}
.pricetag--dark {
  color: var(--rr-color-text-dark);
}
.pricetag--light {
  color: var(--rr-color-text-light);
}
.pricetag--line-through {
  text-decoration: line-through;
}
</style>
