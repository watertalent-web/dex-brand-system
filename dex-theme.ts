/**
 * DEX Design System — Tailwind CSS Preset v1.0
 *
 * Gebruik:
 *   // tailwind.config.ts
 *   import dexPreset from '../dex-brand/dex-theme'
 *   export default { presets: [dexPreset], content: [...] } satisfies Config
 *
 * Of als onderdeel van een gedeeld pakket:
 *   import dexPreset from '@dex/brand/tailwind'
 */

import type { Config } from 'tailwindcss'

const dexPreset = {
  theme: {
    extend: {

      colors: {
        dex: {
          bg:             '#2D1B2E',
          surface:        '#3D2840',
          'surface-high': '#4E3352',
          'surface-inset':'#221528',
          border:         '#5C3D5E',
          'border-subtle':'#3D2840',

          text:           '#F5EFF3',
          'text-muted':   '#C4AEBB',
          'text-subtle':  '#8B6B7A',
          'text-inverse': '#2D1B2E',

          gold: {
            DEFAULT:  '#D4860A',
            light:    '#F5A623',
            dark:     '#A86508',
            muted:    '#4A2E04',
            contrast: '#1A1000',
          },

          teal: {
            DEFAULT:  '#00929F',
            light:    '#00B8C8',
            dark:     '#006E7A',
            muted:    '#0C3F44',
            contrast: '#001A1D',
          },

          success: '#22C55E',
          'success-muted': '#052E16',
          warning: '#F59E0B',
          'warning-muted': '#3B1F04',
          error:   '#EF4444',
          'error-muted':   '#3B0A0A',
          info:    '#3B82F6',
          'info-muted':    '#0B1E40',
        },
      },

      fontFamily: {
        display: ['Barlow Condensed', 'Arial Narrow', 'system-ui', 'sans-serif'],
        ui:      ['Space Grotesk', 'Trebuchet MS', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },

      borderRadius: {
        'dex-xs': '2px',
        'dex-sm': '4px',
        'dex':    '8px',
        'dex-lg': '12px',
        'dex-xl': '16px',
      },

      boxShadow: {
        'dex-sm':         '0 1px 3px rgba(0, 0, 0, 0.4)',
        'dex':            '0 4px 12px rgba(0, 0, 0, 0.5)',
        'dex-lg':         '0 8px 24px rgba(0, 0, 0, 0.6)',
        'dex-xl':         '0 16px 40px rgba(0, 0, 0, 0.7)',
        'dex-glow-gold':  '0 0 16px rgba(212, 134, 10, 0.35)',
        'dex-glow-teal':  '0 0 16px rgba(0, 146, 159, 0.35)',
      },

      spacing: {
        'dex-1':  '0.25rem',
        'dex-2':  '0.5rem',
        'dex-3':  '0.75rem',
        'dex-4':  '1rem',
        'dex-5':  '1.25rem',
        'dex-6':  '1.5rem',
        'dex-8':  '2rem',
        'dex-10': '2.5rem',
        'dex-12': '3rem',
        'dex-16': '4rem',
        'dex-20': '5rem',
        'dex-24': '6rem',
      },

      transitionDuration: {
        'dex-fast': '150ms',
        'dex':      '250ms',
        'dex-slow': '400ms',
      },

      letterSpacing: {
        'dex-display': '0.04em',
      },

    },
  },
} satisfies Partial<Config>

export default dexPreset
