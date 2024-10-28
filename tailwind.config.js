// tailwind.config.mjs
export default {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-bg': "url('/images/bg-intro-desktop.jpg')",
      }),
  },
  plugins: [],
}
}