<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import Paragraph from "~/components/Paragraph/Paragraph.vue";

const cartStore = useCartStore();
const items = computed(() => cartStore.items);
const totalPrice = computed(() => cartStore.getTotalPrice());
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="8" class="text-center">
        <Heading variant="title1" color="dark" tag="h1">Ostoskori</Heading>
        <v-card
          v-for="item in items"
          :key="item.product._id"
          class="mb-4 d-flex align-center justify-between"
        >
          <v-img
            :src="item.product.cover"
            :alt="item.product.title"
            max-width="100"
            class="mb-2"
          />
          <v-card-title
            >{{ item.product.title }}, {{ item.product.name }}</v-card-title
          >
          <v-card-subtitle
            >Hinta: {{ item.product.unit_price }} €</v-card-subtitle
          >
          <v-banner-actions>
            <Button
              color="error"
              @click="cartStore.removeFromCart(item.product._id)"
              ><v-icon icon="mdi-cart-remove" /> Poista</Button
            >
          </v-banner-actions>
        </v-card>
        <v-card>
          <v-card-title>Yhteensä: {{ totalPrice }} €</v-card-title>
        </v-card>
        <v-card>
          <v-card-title>Maksu</v-card-title>
          <v-card-text>
            <Paragraph color="dark" variant="body">
              Maksu onnistuu kätevästi verkkopankki- tai luottokorttimaksuna
              Checkout Finlandin kautta.
            </Paragraph>
            <Button
              aria-label="Maksa PayPalilla"
              :color="'paypal'"
              :rounded="true"
              @click="console.log('PayPal maksaminen')"
              ><span class="paypal-button">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path
                    d="M239.9 359.9C236.4 379.1 222.5 468.6 218.4 493.9C218.1 495.7 217.4 496.4 215.4 496.4L140.8 496.4C133.2 496.4 127.7 489.8 128.7 482.5L187.3 110.6C188.8 101 197.4 93.7 207.3 93.7C359.6 93.7 372.4 90 411.3 105.1C471.4 128.4 476.9 184.6 455.3 245.4C433.8 308 382.8 334.9 315.2 335.7C271.8 336.4 245.7 328.7 239.9 359.9zM485.6 216C483.8 214.7 483.1 214.2 482.6 217.3C480.6 228.7 477.5 239.8 473.8 250.9C433.9 364.7 323.3 354.8 269.3 354.8C263.2 354.8 259.2 358.1 258.4 364.2C235.8 504.6 231.3 533.9 231.3 533.9C230.3 541 234.8 546.8 241.9 546.8L305.4 546.8C314 546.8 321.1 540.5 322.8 531.9C323.5 526.5 321.7 538 337.2 440.6C341.8 418.6 351.5 420.9 366.5 420.9C437.5 420.9 492.9 392.1 509.4 308.6C515.9 273.8 514 237.2 485.6 216z"
                  />
                </svg>
              </span>
              Maksa PayPalilla {{ totalPrice }} €</Button
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.paypal-button {
  background-color: var(--rr-color-integrations-paypal);
  color: var(--rr-color-link-light);
}
</style>
