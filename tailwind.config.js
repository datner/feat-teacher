module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Epilogue",
          "system-ui",
          "-apple-system",
          "Roboto",
          "Segoe UI",
          "Ubuntu",
          "Cantarell",
          "Noto Sans",
          "sans-serif",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      height: {
        "sm-hero": "375px",
        hero: "455px",
        "lg-hero": "720px",
      },
      flex: {
        none: "0 0 auto",
      },
      minWidth: {
        3: "0.75rem",
      },
      minHeight: {
        3: "0.75rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
    outline: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("tailwindcss-textshadow")],
};
