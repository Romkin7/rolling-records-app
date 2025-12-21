export const useProducts = (
  apiBaseUri: string,
  withPath: boolean = false,
  slug?: string
) => {
  const route = useRoute();
  const productSlug = computed(() => route.params.slug || slug || null);
  const query = computed(() => route.query);
  const stringifiedQuery = computed(() => JSON.stringify(query.value));

  // define unique key to be used with cache, to eliminate cache collisions
  const uniqueKey = computed(() =>
    productSlug.value
      ? `rr-products-${productSlug.value}`
      : query?.value.name
        ? `rr-products-${query.value.page_size}-${query.value.name}`
        : `rr-products-${query.value.page_size}`
  );
  const url = computed(() =>
    withPath && productSlug.value
      ? `${apiBaseUri}/products/${productSlug.value}`
      : withPath
        ? `${apiBaseUri}/products`
        : apiBaseUri
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
            statusMessage: `No product found with slug ${productSlug.value}`,
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

        const expiryTime = 1000 * 60 * 1; // fifteen minutes
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
