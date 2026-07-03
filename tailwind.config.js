/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /* Exact 6 breakpoints per responsive spec — no others */
    screens: {
      'xs':  '320px',   // small mobile
      'sm':  '480px',   // mobile
      'md':  '768px',   // tablet
      'lg':  '1024px',  // small laptop
      'xl':  '1280px',  // desktop
      '2xl': '1536px',  // large desktop / 4K
    },
    extend: {
      /* fontSize wired to fluid CSS token scale — never hardcoded */
      fontSize: {
        xs:   ['var(--text-xs)',   { lineHeight: '1.4' }],
        sm:   ['var(--text-sm)',   { lineHeight: '1.5' }],
        base: ['var(--text-base)', { lineHeight: '1.6' }],
        lg:   ['var(--text-lg)',   { lineHeight: '1.5' }],
        xl:   ['var(--text-xl)',   { lineHeight: '1.4' }],
        '2xl':['var(--text-2xl)', { lineHeight: '1.3' }],
        '3xl':['var(--text-3xl)', { lineHeight: '1.25' }],
        '4xl':['var(--text-4xl)', { lineHeight: '1.2' }],
        '5xl':['var(--text-5xl)', { lineHeight: '1.1' }],
        hero: ['var(--text-hero)', { lineHeight: '1.05' }],
      },
      /* spacing wired to fluid 8px-base token scale */
      spacing: {
        'fluid-1':  'var(--space-1)',
        'fluid-2':  'var(--space-2)',
        'fluid-3':  'var(--space-3)',
        'fluid-4':  'var(--space-4)',
        'fluid-6':  'var(--space-6)',
        'fluid-8':  'var(--space-8)',
        'fluid-12': 'var(--space-12)',
      },
      colors: {
        void: "rgb(var(--void-rgb) / <alpha-value>)",
        base: "rgb(var(--base-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        elevated: "rgb(var(--elevated-rgb) / <alpha-value>)",
        overlay: "rgb(var(--overlay-rgb) / <alpha-value>)",
        cyan: {
          400: "rgb(var(--cyan-400-rgb) / <alpha-value>)",
          500: "rgb(var(--cyan-500-rgb) / <alpha-value>)",
          600: "rgb(var(--cyan-600-rgb) / <alpha-value>)",
        },
        violet: {
          400: "rgb(var(--violet-400-rgb) / <alpha-value>)",
          500: "rgb(var(--violet-500-rgb) / <alpha-value>)",
          600: "rgb(var(--violet-600-rgb) / <alpha-value>)",
        },
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        rajora: {
          primary: "rgb(var(--rajora-primary-rgb) / <alpha-value>)",
          secondary: "rgb(var(--rajora-secondary-rgb) / <alpha-value>)",
          accent: "rgb(var(--rajora-accent-rgb) / <alpha-value>)",
        },
        // Custom Zinc Palette override to allow light/dark mode changes
        zinc: {
          50: "rgb(var(--zinc-50-rgb) / <alpha-value>)",
          100: "rgb(var(--zinc-100-rgb) / <alpha-value>)",
          200: "rgb(var(--zinc-200-rgb) / <alpha-value>)",
          300: "rgb(var(--zinc-300-rgb) / <alpha-value>)",
          400: "rgb(var(--zinc-400-rgb) / <alpha-value>)",
          500: "rgb(var(--zinc-500-rgb) / <alpha-value>)",
          600: "rgb(var(--zinc-600-rgb) / <alpha-value>)",
          700: "rgb(var(--zinc-700-rgb) / <alpha-value>)",
          800: "rgb(var(--zinc-800-rgb) / <alpha-value>)",
          900: "rgb(var(--zinc-900-rgb) / <alpha-value>)",
          950: "rgb(var(--zinc-950-rgb) / <alpha-value>)",
        },
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "Space Grotesk", "sans-serif"],
        body: ["Satoshi", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        sm: "var(--shadow-sm)",
        xl: "var(--shadow-xl)",
        'premium': '0 0 50px -12px rgba(0, 0, 0, 0.5)',
        'glow-cyan': '0 0 20px -5px rgba(6, 182, 212, 0.3)',
        'soft-panel': '0 16px 48px -24px rgba(15, 23, 42, 0.35)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
      },
      backgroundImage: {
        "neural-grid": "url('/neural-grid.svg')",
        "grad-primary": "linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
