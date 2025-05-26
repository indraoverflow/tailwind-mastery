
/**
 * Tailwind CSS configuration file.
 *
 * @module tailwind.config
 * @type {import('tailwindcss').Config}
 *
 * @property {string[]} content - Array of file globs to scan for class names.
 * @property {object} theme - Theme customization options.
 * @property {object} theme.extend - Extended theme values.
 * @property {object} theme.extend.spacing - Custom spacing values.
 * @property {string} theme.extend.spacing.custom-padding - Custom spacing value of 10px.
 * @property {object} theme.extend.padding - Custom padding values.
 * @property {string} theme.extend.padding['custom-padding-only'] - Custom padding value of 100px.
 * @property {object} theme.extend.margin - Custom margin values.
 * @property {string} theme.extend.margin['custom-margin-only'] - Custom margin value of 205px.
 * @property {Array} plugins - Array of Tailwind CSS plugins.
 */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      spacing: {
        'custom-padding': '10px',
      },
      padding: {
        'custom-padding-only': '100px',
      },
      margin: {
        'custom-margin-only': '205px',
      },
    },
  },
  plugins: [],
}

