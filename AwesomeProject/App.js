import React, {Component} from 'react';
import { StyleSheet, View, AppRegistry, Text } from 'react-native';


/* Lesson 1: Hello World
  export default class HelloWorldApp extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Hello World!</Text>
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
      //font-size = 15px,
    },
  });
  */

/* Lesson 2: Components
  export default class Bananavarieties extends React.Component {
   render() { 
        let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
          return (
            <Image source ={pic} style={{width:193, height:110}}/>
            );
    }
  }

  AppRegistry.registerComponent('AwesomeProject', () => Bananas);
  */

/* Lesson 3: Props
  class Greeting extends Component {
    render () {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>Hello {this.props.name}!</Text>
        </View>
        );

    } 
  }

  export default class LotsOfGreetings extends Component {
    render() {
      return (
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          </View>
      );
    }
  }
  */  

/* Lesson 4: State

  class Blink extends Component {
    constructor(props) {
      super(props);
      this.state = { isShowingText: true };

      // Toggle the state every second
      setInterval(() => (
        this.setState(previousState => (
          { isShowingText: !previousState.isShowingText }
        ))
      ), 1000
      );
    }

    render() {
      if (!this.state.isShowingText) {
        return null;
      }

      return (
        <Text>{this.props.text}</Text>
      );
    }
  }

  export default class BlinkApp extends Component {
    render() {
      return (
        <View>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View>
      );
    }
  }

  // skip this line if using Create React Native App
  AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
  */

/* Lesson 5: Style
*/
  const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });

  export default class LotsOfStyles extends Component {
    render() {
      return (
        <View>
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigBlue}>just bigBlue</Text>
          <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
          <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
      );
    }
  }

  // skip this line if using Create React Native App
  AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
