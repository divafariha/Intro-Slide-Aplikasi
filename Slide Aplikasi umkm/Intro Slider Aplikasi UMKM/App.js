import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const slides = [
  {
    key: 'slide1',
    title: 'Aplikasi UMKM🛒',
    text: 'Sistem Kasir Untuk Semua Jenis Usahamu',
    image: require('./assets/logo-umkm.png'),
    backgroundColor: '#B0DAFF',
  },
  {
    key: 'slide2',
    title: 'Transaksi Lebih Mudah 🧾',
    text: 'Catat Seluruh Aktivitas Transaksi dengan Customer ',
    image: require('./assets/logotransaksi.png'),
    backgroundColor: '#FEA1BF',
  },
  {
    key: 'slide3',
    title: 'Manajemen Persediaan',
    text: 'Kelola Persediaan dengan fitur fitur yang Lengkap',
    image: require('./assets/logoMP.png'),
    backgroundColor: '#D4ADFC',
  },
];



const Onboarding = ({ navigation }) => {
  const [showNextButton, setShowNextButton] = useState(true);

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slideContainer, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate('Login'); // navigasi ke halaman login
  };

  const onSlideChange = (index, lastIndex) => {
    setShowNextButton(index !== slides.length - 1);
  };

  const slider = React.useRef(null);

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      onSlideChange={onSlideChange}
      ref={slider}
      showPrevButton={true}
      showSkipButton={false}
      showDoneButton={true}
      doneLabel="Selesai"
    />
  );
};

const Login = () => {
  return (
    <View style={styles.slideContainer}>
      <Text style={styles.title1}>Wellcome To </Text>
      <Text style={styles.title}>Sistem Kasir UMKM</Text>
      <Text style={styles.title3}>🛒</Text>
      <Text style={styles.title2}>Silahkan Login Terlebih Dahulu</Text>

      <View>
        <TouchableOpacity>
          <View style={styles.signupButton}>
            <Text style={{ color: 'white' }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 20,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    marginVertical: 4,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  title1: {
    marginVertical: 4,
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
  },
  title3: {
    marginVertical: 4,
    fontSize: 150,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 20,
  },
  title2: {
    marginVertical: 20,
    fontSize: 20,
    marginTop: 40,
    justifyContent: 'center',
  },
  signupButton: {
    marginVertical: 5,

    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: 'black',
    backgroundColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;