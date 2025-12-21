<script lang="ts" setup>
import clsx from "clsx";
export interface ButtonProps {
  variant?: "elevated" | "flat" | "tonal" | "text" | "outlined";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "error"
    | "paypal";
  disabled?: boolean;
}
const { size, color, variant, disabled, rounded } = defineProps<ButtonProps>();
const classes = clsx("rr-button", {
  "rr-button": true,
  [size || "medium"]: size,
  [color || "primary"]: color,
  pill: rounded,
  ["disabled"]: disabled,
});
</script>

<template>
  <v-btn
    :variant="variant || 'elevated'"
    :color="color || 'primary'"
    :disabled="disabled || false"
    :class="classes"
  >
    <slot />
  </v-btn>
</template>

<style scoped>
.rr-button {
  /* Add any custom styles for your button here */
  display: flex;
  align-items: center;
  justify-content: center;
}

.rr-button.small {
  font: var(--rr-typography-body-2);
  padding: var(--rr-size-dimension-spacing-2) var(--rr-size-dimension-spacing-4);
}

.rr-button.medium {
  font: var(--rr-typography-body-1);
  padding: var(--rr-size-dimension-spacing-5) var(--rr-size-dimension-spacing-7);
}

.rr-button.large {
  font: var(--rr-typography-heading-title3);
  padding: var(--rr-size-dimension-spacing-6) var(--rr-size-dimension-spacing-8);
}

.rr-button.pill {
  border-radius: var(--rr-size-dimension-border-radius-rounded-pill);
}

.rr-button.success {
  background-color: var(--rr-color-semantic-success) !important;
}

.rr-button.error {
  background-color: var(--rr-color-semantic-error) !important;
}

.rr-button.paypal {
  background-color: var(--rr-color-integrations-paypal) !important;
  color: var(--rr-color-link-light) !important;
}
</style>
