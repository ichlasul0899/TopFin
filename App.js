import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable  } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const placeHolderImage = require('./assets/images/background-image.png');
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Bro</Text>
      <Image source={placeHolderImage} style={styles.image}  />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => console.log('Anda akan login.')}>
          <FontAwesome
            name="sign-in"
            size={18}
            color="white"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonLabel}>LOGIN</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: '#green',
    borderRadius: 35,
    marginTop: 20
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
