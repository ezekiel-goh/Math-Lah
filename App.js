import React from "react";
import { View, LogBox } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/LoginScreen";
import CreateAccount from "./app/screens/CreateAccount";
import Settings from "./app/screens/Settings";
import About from "./app/screens/About";
import QuizExample from "./app/screens/quizExample";
import QuizList from "./app/screens/quizList";
import LessonExample from "./app/screens/LessonExample";
import LessonList from "./app/screens/LessonList";
import Home from "./app/screens/homePage";
import AnswerExample from "./app/screens/answerExample";
import AnswerList from "./app/screens/answerList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Quiz Example" component={QuizExample} />
        <Stack.Screen name="Quiz List" component={QuizList} />
        <Stack.Screen name="Lesson Example" component={LessonExample} />
        <Stack.Screen name="Lesson List" component={LessonList} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Answer Example" component={AnswerExample} />
        <Stack.Screen name="Answer List" component={AnswerList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
