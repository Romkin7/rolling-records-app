<script setup lang="ts">
import Link from "@/components/Link/Link.vue";
interface NavbarLinkProps {
  to: string;
}
const props = defineProps<NavbarLinkProps>();
</script>
<template>
  <v-btn text>
    <Link variant="navigation" color="light" :to="props.to">
      <slot />
    </Link>
  </v-btn>
</template>
