export default {
  source: ["styleDictionary/tokens/sizes/*.json"],
  platforms: {
    css: {
      transforms: ["size/rem", "size/em", "size/percent"],
      transformGroup: "css",
      prefix: "rr",
      buildPath: "app/assets/css/",
      files: [
        {
          destination: "size-tokens.css",
          format: "css/variables",
        },
      ],
    },
  },
};
