import { DefaultTheme } from 'styled-components/native'
import { Colors } from './colors'
import { TThemes } from './styled'

const LightTheme: DefaultTheme = {
  margin: 24,
  padding: 24,
  colors: Colors.light,
}

const DarkTheme: DefaultTheme = {
  margin: 24,
  padding: 24,
  colors: Colors.dark,
}

export const Themes: Record<TThemes, DefaultTheme> = {
  light: LightTheme,
  dark: DarkTheme,
}
