
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  const skills = [
    { id: 1, name: 'java' },
    { id: 2, name: 'python' },
    { id: 3, name: 'React Native' },
    { id: 4, name: 'AngularJs' },
    { id: 5, name: '.Net' }
  ];

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedRadio(item.id)}
        >
          <View style={styles.radiowrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id && (
                <View style={styles.radiobg}></View>
              )}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: 'skyblue',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radiowrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: 'skyblue',
    height: 28,
    width: 28,
    borderRadius: 14,
    margin: 4,
  },
});

export default App;
