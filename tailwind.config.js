/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto Mono",
      },
    },
  },
  plugins: [],
};
// .roboto-mono-<uniquifier> {
//   font-family: "Roboto Mono", serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }
