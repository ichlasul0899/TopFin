import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const LoginPage = () => {
  return (
    <View>
      <Text>LoginPage</Text>
      <Link href="/">Home</Link>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({})