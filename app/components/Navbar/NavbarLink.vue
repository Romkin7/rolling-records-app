<script setup lang="ts">
import Link from "@/components/Link/Link.vue";
interface NavbarLinkProps {
  to: string;
}
const props = defineProps<NavbarLinkProps>();
</script>
<template>
  <v-btn text class="navbar-link">
    <Link
      variant="navigation"
      color="light"
      :to="props.to"
      class="navbar-link__a"
    >
      <slot />
    </Link>
  </v-btn>
</template>
<style scoped>
.navbar-link {
  height: 100%;
}
.navbar-link__a {
  height: 100%;
  line-height: 64px;
}
</style>
