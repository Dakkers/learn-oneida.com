/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './@/**/*.{ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
    fontSize: {
      // XS screen sizes
      xsLabelS: ['0.625rem', {
        fontWeight: '600'
      }],
      xsLabelM: ['0.75rem', {
        fontWeight: '600'
      }],
      xsLabelL: ['0.875rem', {
        fontWeight: '600'
      }],
      xsBodyS: ['0.75rem', {
        fontWeight: '400'
      }],
      xsBodyM: ['0.875rem', {
        fontWeight: '400'
      }],
      xsBodyL: ['1rem', {
        fontWeight: '400'
      }],
      xsTitleS: ['1rem', {
        fontWeight: '700'
      }],
      xsTitleM: ['1.125rem', {
        fontWeight: '700'
      }],
      xsTitleL: ['1.25rem', {
        fontWeight: '700'
      }],
      xsHeadlineS: ['1.5rem', {
        fontWeight: '700'
      }],
      xsHeadlineM: ['1.75rem', {
        fontWeight: '700'
      }],
      xsHeadlineL: ['2rem', {
        fontWeight: '700'
      }],
      // MD screen sizes
      mdLabelS: ['0.75rem', {
        fontWeight: '600'
      }],
      mdLabelM: ['0.875rem', {
        fontWeight: '600'
      }],
      mdLabelL: ['1rem', {
        fontWeight: '600'
      }],
      mdBodyS: ['0.875rem', {
        fontWeight: '400'
      }],
      mdBodyM: ['1rem', {
        fontWeight: '400'
      }],
      mdBodyL: ['1.125rem', {
        fontWeight: '400'
      }],
      mdTitleS: ['1.125rem', {
        fontWeight: '700'
      }],
      mdTitleM: ['1.25rem', {
        fontWeight: '700'
      }],
      mdTitleL: ['1.5rem', {
        fontWeight: '700'
      }],
      mdHeadlineS: ['1.75rem', {
        fontWeight: '700'
      }],
      mdHeadlineM: ['2rem', {
        fontWeight: '700'
      }],
      mdHeadlineL: ['2.25rem', {
        fontWeight: '700'
      }],
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
}
