<script setup lang="ts">
import clsx from "clsx";

interface HeadingProps {
  color: "dark" | "light" | "medium";
  variant:
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "title5"
    | "title6"
    | "display1"
    | "display2";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  "aria-label"?: string;
}

const props = defineProps<HeadingProps>();
const { color, tag, variant } = props;
const headingClasses = computed(() => {
  return clsx({
    [`heading--${color}`]: color,
    [`heading--${variant}`]: variant,
  });
});
</script>
<template>
  <h1
    v-if="props.tag === 'h1'"
    :class="headingClasses"
    :aria-label="props['aria-label']"
  >
    <slot />
  </h1>
  <h2
    v-else-if="props.tag === 'h2'"
    :class="headingClasses"
    :aria-label="props['aria-label']"
  >
    <slot />
  </h2>
  <h3
    v-else-if="props.tag === 'h3'"
    :class="headingClasses"
    :aria-label="props['aria-label']"
  >
    <slot />
  </h3>
  <h4
    v-else-if="props.tag === 'h4'"
    :class="headingClasses"
    :aria-label="props['aria-label']"
  >
    <slot />
  </h4>
  <h5
    v-else-if="props.tag === 'h5'"
    :class="headingClasses"
    :aria-label="props['aria-label']"
  >
    <slot />
  </h5>
  <h6
    v-else-if="props.tag === 'h6'"
    :class="headingClasses"
    :aria-label="props['aria-label']"
  >
    <slot />
  </h6>
</template>
<style scoped></style>
