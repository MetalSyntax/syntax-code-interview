import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
const key = require('./data/test-board-2.json');
const dictionary = require('./data/dictionary.json');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tap: '',
      isTap: false
    };
  }

  handleTap(value) {
    this.setState({tap: this.state.tap + value})
  }

  render() {
    const keyboard = []
    for (var i = 0; i < key.board.length; i += 4) {
      keyboard.push(<View style={styles.row}>
        {key.board.slice(i, i + 4).map((keys, index) => (
          <TouchableOpacity style={styles.touchable} onPress={() => this.handleTap(keys)}>
              <Text style={styles.button}>
                {keys}
              </Text>
          </TouchableOpacity>
        ))}
      </View>)
    }
    return (
      <View style={styles.container}>
        <StatusBar/>
        <SafeAreaView>
        <View style={styles.rowClose}>
          <Text style={styles.close}>
            Clear
          </Text>
        <TouchableOpacity style={styles.rowClear} onPress={() => this.setState({ tap: '', isTap: false })}>
          <Text style={styles.ex}>
            X
          </Text>
        </TouchableOpacity>
        </View>
        {keyboard}
        <View style={styles.row}>
          <TextInput style={styles.input} editable={false} selectTextOnFocus={false} value={this.state.tap.toLowerCase()} placeholder="Insert word" placeholderTextColor="ABB2B9"/>
        </View>
        { this.state.tap.length > 2 ? dictionary.words.includes(this.state.tap.toLowerCase()) 
        ? <View style={styles.rowValid}><Text style={styles.true}>Valid</Text></View> 
        : <View style={styles.rowValid}><Text style={styles.false}>Invalid</Text></View> : null}
        </SafeAreaView>
      </View>
    );
  }
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
    padding: 7,
    width: 50,
    height: 50,
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D5DBDB'
  },
  trueButton: {
    color: '#FFF',
    backgroundColor: '#2ECC71',
    padding: 7,
    width: 50,
    height: 50,
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D5DBDB'
  },
  falseButton: {
    color: '#FFF',
    backgroundColor: '#CB4335',
    padding: 7,
    width: 50,
    height: 50,
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 50,
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
  rowValid: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  true: {
    color: '#2ECC71',
    fontSize: 18,
  },
  false: {
    color: '#CB4335',
    fontSize: 18,
  },
  close: {
    color: '#ABB2B9',
    fontSize: 18,
  },
  ex: {
    color: '#FFF',
    backgroundColor: '#ABB2B9',
    padding: 7,
    width: 40,
    height: 40,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ABB2B9'
  },
  rowClose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});
