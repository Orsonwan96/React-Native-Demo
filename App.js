import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    ), 1000);
  }

  state = {isShowingText: true};

  render() {
      if (!this.state.isShowingText) {
        return null;
      }
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Text style={{padding: 10, fontSize: 42}}>
          This is a demo test for React Native!
        </Text>
        <Text style={{padding: 10, fontSize: 42}}>
          The input box can disappear!
        </Text>
      </View>
    );
  }
}
