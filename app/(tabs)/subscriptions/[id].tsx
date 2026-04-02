import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionDetails = () => {
    const {id} = useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text className='mt-16'>SubscriptionDetails: {id}</Text>
      <Link href="/">Back to home</Link>
    </View>
  )
}

export default SubscriptionDetails