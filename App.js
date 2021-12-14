import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const keyBoard = require('./data/test-board-2.json');

  const [color, setColor] = useState(null);
  
  function handleClick() {
    setColor(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowClear}>
        <Text style={styles.close}>
          Clear
        </Text>
      </View>
      <View style={styles.row}>
      {keyBoard.board.slice(0, 4).map((keys) => (
        <TouchableNativeFeedback style={styles.touchable}>
            <Text style={styles.button}>
              {keys}
            </Text>
        </TouchableNativeFeedback>
      ))}
      </View>
      <View style={styles.row}>
      {keyBoard.board.slice(4, 8).map((keys) => (
        <TouchableNativeFeedback style={styles.touchable}>
            <Text style={styles.button}>
              {keys}
            </Text>
        </TouchableNativeFeedback>
      ))}
      </View>
      <View style={styles.row}>
      {keyBoard.board.slice(8, 12).map((keys) => (
        <TouchableNativeFeedback style={styles.touchable}>
            <Text style={styles.button}>
              {keys}
            </Text>
        </TouchableNativeFeedback>
      ))}
      </View>
      <View style={styles.row}>
      {keyBoard.board.slice(12, 16).map((keys) => (
        <TouchableNativeFeedback style={styles.touchable}>
            <Text style={styles.button}>
              {keys}
            </Text>
        </TouchableNativeFeedback>
      ))}
      </View>
      <View style={styles.row}>
        <TextInput style={styles.input} editable={false} selectTextOnFocus={false}/>
      </View>
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
  row: {
    flexDirection: 'row',
  },
  rowClear: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  touchable: {
    borderColor: 'transparent',
    margin: 5
  },
  button: {
    color: '#FFF',
    backgroundColor: '#F5B041',
    padding: 10,
    width: 50,
    height: 50,
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D5DBDB'
  },
  true: {
    color: '#FFF',
    backgroundColor: '#2ECC71',
    padding: 10,
    width: 50,
    height: 50,
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D5DBDB'
  },
  false: {
    color: '#FFF',
    backgroundColor: '#CB4335',
    padding: 10,
    width: 50,
    height: 50,
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D5DBDB'
  },
  input: {
    margin: 10,
    padding: 10,
    height: 40,
    borderColor: '#D5DBDB',
    borderRadius: 10,
    borderWidth: 1,
    width: '100%'
  },
  close: {
    color: '#ABB2B9',
    cursor: 'pointer',
    fontSize: 18
  }
});
