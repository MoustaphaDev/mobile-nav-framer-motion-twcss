module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "purply-gray": "#222329",
        "light-green": "#72E956",
      },
      borderColor: {
        "purply-gray": "#222329",
      },
    },
  },
  plugins: [],
};
