import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
       <Text className="bg-red-500">HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen