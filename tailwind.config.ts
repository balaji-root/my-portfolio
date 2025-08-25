import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Cybersecurity terminal theme
        terminal: {
          black: "#000000",
          green: "#00ff00",
          "green-dark": "#00cc00",
          "green-light": "#66ff66",
          cyan: "#00ffff",
          "cyan-dark": "#00cccc",
          red: "#ff0000",
          "red-dark": "#cc0000",
          yellow: "#ffff00",
          orange: "#ff8800",
          purple: "#cc00ff",
          "gray-dark": "#1a1a1a",
          "gray-medium": "#333333",
          "gray-light": "#666666",
        },
        matrix: {
          green: "#00ff41",
          "green-dark": "#003300",
          "green-glow": "#00ff41",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "terminal-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            "box-shadow": "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00",
          },
          "50%": {
            "box-shadow": "0 0 2px #00ff00, 0 0 5px #00ff00, 0 0 8px #00ff00",
          },
        },
        "scan-lines": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "type-writer": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "terminal-blink": "terminal-blink 1s infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "scan-lines": "scan-lines 2s linear infinite",
        "type-writer": "type-writer 3s steps(40) 1s forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
