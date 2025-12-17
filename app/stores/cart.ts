import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/@types/product'

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartItems {
  [productId: string]: CartItem
}

export interface CartState {
  items: CartItems
}

function cartItemsToArray(items: CartItems): CartItem[] {
  return Object.values(items)
}

export const useCartStore = defineStore('cart', () => {
  const CART_ITEMS = ref<CartItems>({})
  const items = computed(() => cartItemsToArray(CART_ITEMS.value))

  function addToCart(product: Product, quantity: number = 1) {
    const existingItem = CART_ITEMS.value[product._id]
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      CART_ITEMS.value[product._id] = {
        product,
        quantity,
      }
    }
  }

  function removeFromCart(productId: string) {
    delete CART_ITEMS.value[productId]
  }

  function getTotalPrice() {
    return items.value.reduce((total, item) => {
      return total + item.product.unit_price * item.quantity
    }, 0)
  }

  return { items, addToCart, removeFromCart, getTotalPrice }
})
