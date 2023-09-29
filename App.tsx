import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './src/screens/home'
import { ThemeProvider } from 'styled-components/native'
import { TThemes } from './src/theme/styled'
import { Themes } from './src/theme/themes'

const Stack = createNativeStackNavigator()

const App = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
)

export default function MyApp() {
  const theme: TThemes = 'light'

  return (
    <NavigationContainer>
      <ThemeProvider theme={Themes[theme]}>
        <App />
      </ThemeProvider>
    </NavigationContainer>
  )
}
