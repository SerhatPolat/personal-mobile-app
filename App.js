import * as React from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  BottomNavigation,
  Text,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "yellow",
    accent: "black",
  },
};

const AboutRoute = () => <Text>About</Text>;

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

export default App;
