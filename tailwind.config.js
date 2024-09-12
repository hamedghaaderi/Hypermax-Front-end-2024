/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "tablet": "481px",
      "desk": "769px",
      "desklg": "1280px",
    },
    extend: {
      width: {
        "55%": "55%",
        "180": "180px",
        "90%": "90%",
        "48%": "48%",
        "23%": "23%"
      },
      maxWidth: {
        "whole": "1156px"
      },
      height: {
        "46": "46px",
        "90%": "90%"
      },
      fontFamily: {
        "shabnam": "Shabnam",
      },
      content: {
        "triangle": `""`
      },
      colors: {
        "red": "#ff3838",
        "gray": "#777777",
        "text": "#555555",
        "blue": "#1494a9",
        "white": "#ffffff",
        "chalk": "#f5f5f5",
        "green": "#11b76b",
        "purple": "#b12fad",
        "orange": "#e86121",
        "yellow": "#ffab10",
        "body": "#f5f6f7",
        "border": "#e8e8e8",
        "heading": "#39404a",
        "primary": "#119744",
        "sub-heading": "#565765",
        "green-chalk": "#ddffd5",
        "green-dark": "#072f17",
        "gray-chalk": "#cccccc",
        "intro-bg": "#f8fffa",
        "facebook": "#3b5998",
        "linkedin": "#0e76a8",
        "twitter": "#00acee",
        "google": "#E60023",
        "instagram": "#F77737",
      },
      backgroundImage: {
        "newsbg": "url(../../public/image/newsletter.jpg)",
        "bgopacity": "linear-gradient(to right, rgba(6, 23, 56, 0.8), rgba(17, 151, 68, 0.8));"
      }
    },
  },
  plugins: [],
};
