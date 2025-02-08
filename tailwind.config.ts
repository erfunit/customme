import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-iran-yekan-x)"],
      },
      colors: {
        primary: {
          DEFAULT: "#A72F3B",
          tint: {
            1: "#FFFFFF",
            2: "#F6EAEB",
            3: "#EDD5D8",
            4: "#E5C1C4",
            5: "#DCACB1",
            6: "#CA8289",
            7: "#B95962",
          },
          shade: {
            1: "#000000",
            2: "#110506",
            3: "#21090C",
            4: "#320E12",
            5: "#431318",
            6: "#641C23",
            7: "#86262F",
          },
        },
        gray: {
          1: "#F8F8F8",
          2: "#F0F0F0",
          3: "#EDEDED",
          4: "#D6D6D6",
          5: "#CBCBCB",
          6: "#AFAFAF",
          7: "#898989",
          8: "#656565",
          9: "#434343",
          10: "#242424",
        },
        error: {
          DEFAULT: "#C30000",
          light: "#ED2E2E",
          bg: "#FFF2F2",
        },
        warning: {
          DEFAULT: "#A9791C",
          light: "#F4B740",
          bg: "#FFF8E1",
        },
        success: {
          DEFAULT: "#00966D",
          light: "#00BA88",
          bg: "#F3FDFA",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "28": "28px",
        "32": "32px",
        "36": "36px",
        "40": "40px",
        "44": "44px",
        "48": "48px",
        "52": "52px",
        "56": "56px",
        "60": "60px",
        "64": "64px",
        "68": "68px",
        "72": "72px",
        "76": "76px",
        "80": "80px",
      },
      borderRadius: {
        "8": "8px",
        "12": "12px",
        "16": "16px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "10": "10px",
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
        "44": "44px",
      },
      lineHeight: {
        "140": "140%",
        "180": "180%",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
