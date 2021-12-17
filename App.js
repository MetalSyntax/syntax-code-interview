import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
const key = require('./data/test-board-1.json');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tap: '',
      newIndex: []
    };
  }
  componentDidMount() {
    let newIndex = key.board.map((value) => {
      return {word: value, isTap: false};
    })
    this.setState({newIndex: newIndex})
  }
  handleTap(value) {
    if (this.state.tap.includes(value)) {
      this.setState({tap: this.state.tap.replace(value,'')})
    } else {
      this.setState({tap: this.state.tap + value})
    }
  }
  handleToggle(value, index) {
    if (value) {
      this.setState((prevState) => ({newIndex: prevState.newIndex.map((k,i) => i == index ? {...prevState.newIndex[index], isTap: false} : k)}))
    } else {
      this.setState((prevState) => ({newIndex: prevState.newIndex.map((k,i) => i == index ? {...prevState.newIndex[index], isTap: true} : k)}))
    }
  }
  render() {
    const keyboard = []
    for (var i = 0; i < key.board.length; i += 4) {
      keyboard.push(<View style={styles.row}>
        {key.board.slice(i, i + 4).map((keys) => (
          <TouchableOpacity 
            onPress={() => {
              this.handleTap(keys)
              this.handleToggle(this.state.newIndex[key.board.indexOf(keys)].isTap, key.board.indexOf(keys))
            }}
            style={styles.touchable}>
              {this.state.newIndex[key.board.indexOf(keys)] ?
              <Text style={
                styles.button, this.state.newIndex[key.board.indexOf(keys)].isTap ? styles.trueButton : styles.button
                }>
                {keys}
              </Text> : 
              <Text style={styles.button}>
                {keys}
              </Text>}
          </TouchableOpacity>
        ))}
      </View>)}
      return (
      <View style={styles.container}>
        <StatusBar/>
        <SafeAreaView>
        <View style={styles.rowClose}>
          <Text style={styles.close}>
            Clear
          </Text>
          {this.state.tap.length > 0 ?
        <TouchableOpacity 
          style={styles.rowClear} 
          onPress={() => this.setState({ tap: '',  newIndex: this.state.newIndex.map((key, index) => index ? {...this.state.newIndex[i], isTap: false} : {...this.state.newIndex[i], isTap: false})})}>
          <Text style={styles.ex}>
            X
          </Text>
        </TouchableOpacity>: null}
        </View> 
        {keyboard}
        <View style={styles.rowFieldValid}>
          <TextInput 
            style={styles.input} 
            editable={false} 
            selectTextOnFocus={false} 
            value={this.state.tap.toLowerCase()} 
            placeholder="Insert word" 
            placeholderTextColor="ABB2B9"/>
        </View>
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
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  rowClear: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10
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
  input: {
    height: 40,
    width: '100%',
    fontSize: 16
  },
  rowValid: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  close: {
    color: '#ABB2B9',
    fontSize: 18,
    marginTop: 30,
    marginBottom: 30
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
    justifyContent: 'flex-end'
  },
  rowFieldValid: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#D5DBDB',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
