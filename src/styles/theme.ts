export const theme = {
  colors: {
    bg: '#0F172A',

    gray200: '#E5E7EB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',

    slate700: '#334155',

    indigo700: '#4338CA',
  },
  fontSize: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
  },
  rounded: {
    sm: '8px',
    full: '9999999px',
  },
  width: {
    base: '1200px',
  },
} as const

export type ThemeType = typeof theme
