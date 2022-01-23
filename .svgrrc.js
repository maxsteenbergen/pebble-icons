module.exports = {
  jsx: {
    babelConfig: {
      plugins: [
        // Remove "xmlns:serif" attribute from "svg" tag
        [
          "@svgr/babel-plugin-remove-jsx-attribute",
          {
            elements: ["svg"],
            attributes: ["xmlns:serif"],
          },
        ],
      ],
    },
  },
};
