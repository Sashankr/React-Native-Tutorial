/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StatusBar, Text, View, StyleSheet, Button, Linking} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [timesClicked, setTimesClicked] = useState(0);

  const clickHandler = () => {
    setCount(count => count + 5);
    setTimesClicked(timesClicked => timesClicked + 1);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Add 5" onPress={clickHandler} />
      <Text style={styles.text}>You clicked {timesClicked} times.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default App;
