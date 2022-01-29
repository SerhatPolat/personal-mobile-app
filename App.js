import * as React from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  BottomNavigation,
} from "react-native-paper";
import { View, Text, StyleSheet, Image } from "react-native";
import profilfoto from "./assets/profilfoto.jpg";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "yellow",
    accent: "black",
  },
};

const AboutRoute = () => (
  <View style={styles.container}>
    <Image source={profilfoto} style={styles.image} />
    <Text style={styles.text1}>Serhat Polat</Text>
    <Text style={styles.text2}>Frontend Developer</Text>
    <Text style={styles.text3}>
      I've been developing frontend for over 1 year. My main goal is to do my
      job with the best way by constantly improving myself and to teach what I
      know to people while doing this.
    </Text>
  </View>
);

const TechStackRoute = () => <Text>Tech Stack</Text>;

const AccountsRoute = () => <Text>Accounts</Text>;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "about", title: "About", icon: "account" },
    { key: "techStack", title: "Tech Stack", icon: "language-javascript" },
    { key: "accounts", title: "Accounts", icon: "linkedin" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    about: AboutRoute,
    techStack: TechStackRoute,
    accounts: AccountsRoute,
  });

  return (
    <PaperProvider theme={theme}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: "1",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  text1: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 25,
  },

  text2: {
    color: "yellow",
  },

  text3: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
});

export default App;
