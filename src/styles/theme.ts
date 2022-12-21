export const theme = {
  colors: {
    bg: '#0F172A',

    gray200: '#E5E7EB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',

    slate700: '#334155',
    slate800: '#1e293b',

    indigo700: '#4338CA',
    indigo800: '#3730a3',

    red500: '#ef4444',
  },
  fontSize: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
  },
  rounded: {
    sm: '8px',
    full: '9999999px',
  },
  width: {
    base: '1200px',
  },
  sizes: {
    header: '70px',
    footer: '40px',
  },
} as const

export type ThemeType = typeof theme
