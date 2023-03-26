import styles from './App.module.css';
import { Box, Heading, HopeProvider, useColorMode } from '@hope-ui/solid'
import { Button } from "@hope-ui/solid"
import DarkModeButton from './components/DarkModeButton/DarkModeButton';
import { Navigate, Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import lightColors from './theme/lightColors';
import darkColors from './theme/darkColors';
import TabNavigationContainer from './components/TabNavigationContainer/TabNavigationContainer';
const Home = lazy(() => import("./pages/Home"));
const Quiz = lazy(() => import("./pages/Quiz"));
const About = lazy(() => import("./pages/About"));

// Config for HopeUi
const config = {
  lightTheme: {
    colors: lightColors
  },
  darkTheme: {
    colors: darkColors
  },
}

function App() {
  return (
    <HopeProvider config={config}>
      <Router>
        <DarkModeButton />
        <Heading>My Site with Lots of Pages</Heading>
        <Routes>
          <Route path="/" element={<Navigate href="/home" />} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/about" element={About} />
          <Route path="/home" component={Home} />
        </Routes>
        <TabNavigationContainer />
      </Router>
    </HopeProvider>
  );
}

export default App;
