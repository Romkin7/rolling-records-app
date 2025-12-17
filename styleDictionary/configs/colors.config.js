export default {
  source: ["styleDictionary/tokens/colors/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      prefix: "rr",
      buildPath: "app/assets/css/",
      files: [
        {
          destination: "color-tokens.css",
          format: "css/variables",
        },
      ],
    },
  },
};
