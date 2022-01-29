import * as React from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  BottomNavigation,
  Button,
} from "react-native-paper";
import { View, Text, StyleSheet, Image, FlatList, Linking } from "react-native";
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

const TechStackRoute = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>My Tech Stack</Text>
    <FlatList
      data={[
        { key: "HTML" },
        { key: "CSS" },
        { key: "Sass" },
        { key: "Bootstrap" },
        { key: "JavaScript" },
        { key: "TypeScript" },
        { key: "React.js" },
        { key: "React Native" },
        { key: "Vue.js" },
      ]}
      renderItem={({ item }) => <Text style={styles.text3}>{item.key}</Text>}
    />
  </View>
);

const AccountsRoute = () => (
  <View style={styles.container}>
    <Button
      icon="github"
      onPress={() => Linking.openURL("https://github.com/SerhatPolat")}
    >
      <Text style={styles.btn}>Github</Text>
    </Button>
    <Button
      icon="linkedin"
      onPress={() =>
        Linking.openURL("https://www.linkedin.com/in/serhat-polat-9655a61bb")
      }
    >
      <Text style={styles.btn}>LinkedIn</Text>
    </Button>
    <Button
      icon="alpha-m"
      onPress={() => Linking.openURL("https://medium.com/@serhatpolat")}
    >
      <Text style={styles.btn}>Medium</Text>
    </Button>
  </View>
);

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
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  heading: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 30,
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

  btn: {
    color: "white",
    fontSize: 20,
  },

  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
});

export default App;
