import 'styled-components/native'

export type TThemes = 'light' | 'dark'

export type TColors = {
  primary: string
  secondary: string
  input: string
  placeholder: string
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    margin: number
    padding: number
    colors: TColors
  }
}
