export default {
  source: ["styleDictionary/tokens/layouts/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      prefix: "rr",
      buildPath: "app/assets/css/",
      files: [
        {
          destination: "layout-tokens.css",
          format: "css/variables",
        },
      ],
    },
  },
};
