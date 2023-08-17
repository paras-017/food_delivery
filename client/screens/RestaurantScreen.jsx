import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const RestaurantScreen = () => {
  const {params} = useRoute()
  let restaurant = params
  console.log(restaurant)
  return (
    <View>
      <Text className='text-blue-700'>RestaurantScreen</Text>
    </View>
  )
}

export default RestaurantScreen