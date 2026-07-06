/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0B0B',
          secondary: '#141414',
          card: '#1A1A1A',
        },
        border: {
          DEFAULT: '#262626',
          accent: '#F97316',
        },
        accent: {
          primary: '#F97316',
          secondary: '#FB923C',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"IBM Plex Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float-1': 'float1 6s ease-in-out infinite',
        'float-2': 'float2 8s ease-in-out infinite',
        'float-3': 'float3 7s ease-in-out infinite',
        'float-4': 'float4 9s ease-in-out infinite',
        'float-5': 'float5 5.5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(6px)' },
        },
        float5: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.5), 0 1px 2px -1px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 32px 0 rgba(0,0,0,0.6)',
        'accent-glow': '0 0 20px rgba(249,115,22,0.15)',
        'accent-glow-strong': '0 0 30px rgba(249,115,22,0.28)',
      },
    },
  },
  plugins: [],
}
