import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title,restaurants,description}) => {
   
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-black text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {restaurants.map((resturant,index)=>{
            return (
                <RestaurantCard
                  key={resturant.id}
                  id={resturant.id}
                  imgUrl={resturant.image}
                  title={resturant.name}
                  rating={resturant.rating}
                  type={resturant.type?.name}
                  address="123 main street"
                  description={resturant.description}
                  dishes={resturant.dishes}
                  lng={resturant.lng}
                  lat={resturant.lat}
                  stars={resturant.stars}
                  reviews={resturant.reviews}
                  restaurant={resturant}
              />    
            )
          })
        }           
       </ScrollView>
    </View>
  )
}

export default FeaturedRow