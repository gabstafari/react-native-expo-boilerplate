import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform } from 'react-native'
import { Link, Slot } from 'expo-router';
import React from 'react'

const index = () => {

  if (Platform.OS === 'web') {
    // Use a basic custom layout on web.
    return (
      <div className="flex-1 items-center justify-center bg-black">
        <header className="flex-1 items-center justify-center text-white">
          <Link href="/" className='text-white'>Home</Link>
          <Link href="/" className='text-red-500'>Settings</Link>
        </header>
        <Slot />
      </div>
    );
  }
  
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-2xl">index</Text>
    </View>
  )
}

export default index