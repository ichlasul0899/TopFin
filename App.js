import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import { useState } from 'react';
const PlaceholderImage = require('./assets/images/undraw_Energizer_re_vhjv.png');
export default function App() {
  const [page, setPage] = useState('home');

  const changePage = () => {
    setPage('login')
    console.log("Change page")
  }

  
  return (
    <SafeAreaView style={styles.container}>
      {
        page === 'home' ? (
          <View>
            <Text style={styles.title}>Home</Text>
            
          </View>
        ) : (
          <Text style={styles.title}>Welcome Back</Text>

        )
      }
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
        <Text style={styles.desc}>Discover And Collect Rare NFTs</Text>
        <Button label={'Get Started'} onPress={changePage} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  title:{
    fontSize: 20,
    padding: 20,
    textAlign:'center',
    textTransform:'capitalize',
    fontWeight:'bold'
  },
  desc:{
    fontSize:18,
    fontWeight:'500',
    textAlign:'center',
    
  }
});
