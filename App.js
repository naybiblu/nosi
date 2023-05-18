import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Pressable, Switch } from 'react-native';


export default function App() {
  const [bool, toggle] = useState(false);

  return (
  <View 
    className="flex-1 items-center justify-center h-screen"
    style={StyleSheet.create({
      backgroundColor: bool ? "white" : "black"
    })}
  >
    <Switch
      trackColor={{false: "gray", true: "gray"}}
      value={bool}
      onValueChange={() => toggle(b => !b)}
      thumbColor={"white"}
      className="-rotate-90 scale-150 rounded-none"
    />
    <StatusBar style="light" />
  </View>
  );
}