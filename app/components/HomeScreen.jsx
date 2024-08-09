import { View, Text, Button } from 'react-native'


export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='login' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

