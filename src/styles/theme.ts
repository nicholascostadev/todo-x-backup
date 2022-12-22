export const theme = {
  colors: {
    bg: '#0F172A',

    gray50: '#f8fafc',
    gray100: 'center',
    gray200: '#E5E7EB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',

    slate700: '#334155',
    slate800: '#1e293b',

    indigo300: '#a5b4fc',
    indigo500: '#6366f1',
    indigo700: '#4338CA',
    indigo800: '#3730a3',

    red500: '#ef4444',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
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
  screenSize: {
    'sm-md': '950px',
  },
} as const

export const device = {
  mobileSmMd: `(max-width: ${theme.screenSize['sm-md']})`,
} as const

export type ThemeType = typeof theme
