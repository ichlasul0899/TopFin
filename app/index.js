import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Link href="/auth">Login Page</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})