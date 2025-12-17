export const useProducts = (apiBaseUri: string) => {
  const route = useRoute();
  const productId = computed(() => route.params.id);
  const query = computed(() => route.query);
  const stringifiedQuery = computed(() => JSON.stringify(query.value));

  // define unique key to be used with cache, to eliminate cache collisions
  const uniqueKey = computed(() =>
    productId.value
      ? `rr-products-${productId.value}`
      : query?.value.name
        ? `rr-products-${query.value.page_size}-${query.value.name}`
        : `rr-products-${query.value.page_size}`
  );
  const url = computed(() =>
    productId.value
      ? `${apiBaseUri}/products/${productId.value}`
      : `${apiBaseUri}/products`
  );
  return useAsyncData(
    () => uniqueKey.value,
    async (_nuxtApp, { signal }) => {
      try {
        return $fetch(url.value, {
          query: query.value,
          signal,
        });
      } catch (error: any) {
        // Centralized error handling
        if (error.response?.status === 404) {
          throw createError({
            statusCode: 404,
            statusMessage: `No product found with ID ${productId}`,
          });
        }

        const statusCode = error.value.statusCode || 500;
        throw createError({
          statusCode,
          statusMessage: error.value.message || "Server Error",
        });
      }
    },
    {
      watch: [stringifiedQuery],
      getCachedData: (key, nuxtApp) => {
        // Get default cached data from Nuxt payload
        const data = nuxtApp.isHydrating
          ? nuxtApp.payload.data[key]
          : nuxtApp.static.data[key];

        // If no cached data exists, return undefined
        if (!data) {
          return undefined;
        }

        const timeStampKey = `${key}-timestamp`;
        const timestamp = nuxtApp.payload.data[timeStampKey];

        // If no timestamp, use data
        if (!timestamp) {
          return data;
        }

        const expiryTime = 1000 * 60 * 15; // fifteen minutes
        const isExpired = Date.now() - timestamp > expiryTime;

        // if isExpred is true, return undefined.
        // Each time undefined is returned, it triggers new fetch.
        if (isExpired) return undefined;

        return data;
      },
      transform: (data) => {
        if (tryUseNuxtApp()) {
          const nuxtApp = useNuxtApp();
          nuxtApp.payload.data[`${uniqueKey.value}-timestamp`] = Date.now();
        }
        return data;
      },
    }
  );
};
