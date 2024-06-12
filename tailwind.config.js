/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        pulse: "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-two": "pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        mtf1: "#FDA4AF",
        mtf2: "#FECACA",
        mtf3: "#FB8098",
        cc1: "#F5DEB3",
        cc2: "#F4A460",
        cc3: "#D2691E",
        cc4: "#FAC176",
        sg1: "#FF0000",
        ds1: "#B6DFEB",
        ds2: "#5FA9C4",
        ss1: "#FFBFDC",
        ss2: "#FCD084",
        ss3: "#DB7093",
      },
    },
  },
  plugins: [],
};
