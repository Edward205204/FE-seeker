import { createTamagui } from 'tamagui';

export const config = createTamagui({
  // tokens work like CSS Variables (and compile to them on the web)
  // accessible from anywhere, never changing dynamically:
  tokens: {
    // width="$sm"
    size: { sm: 8, md: 12, lg: 20 },
    // margin="$sm"
    space: { sm: 4, md: 8, lg: 12 },
    // radius="$none"
    radius: { none: 0, sm: 3 },
    color: { white: '#fff', black: '#000' }
  },

  themes: {
    light: {
      primary: '#5985d8', // text active, button active, main color
      secondary: '#666666', // text unactive, placeholder
      background: '#ffffff' // nền chính
    },
    dark: {
      primary: '#5985d8', // text active, button active, main color
      secondary: '#ffffff', // text unactive, placeholder
      background: '#000' // nền chính
    }
  },

  // media query definitions can be used as style props or with the useMedia hook
  // but also are added to "group styles", which work like Container Queries from CSS
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' }
  },

  shorthands: {
    // <View px={20} />
    px: 'paddingHorizontal'
  },

  // there are more settings, explained below:
  settings: {
    disableSSR: true,
    allowedStyleValues: 'somewhat-strict-web'
  }
});

// now, make your types flow nicely back to your `tamagui` import:
type OurConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}
