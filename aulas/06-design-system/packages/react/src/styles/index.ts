// eslint-disable-next-line prettier/prettier
import { colors, fonts, fontWeights, fontSizes, lineHeights, radii, space } from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

// eslint-disable-next-line prettier/prettier
export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
