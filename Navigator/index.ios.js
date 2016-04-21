import React, {
  AppRegistry,
  Component,
  Navigator,
  View,
  Text
} from 'react-native';

class MyScene extends Component {
  constructor(props: any) {
    super(props);
  }
  render(){
  	return(
      <View style={{paddingTop: 60}}>
        <Text>Scene</Text>
      </View>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
    return(
      <Text></Text>
    )
  },
  Title: function( route, navigator, index, navState ){
    return(
      <Text>{ route.name }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return(
      <Text>Next</Text>
    )
  },
};

class SampleApp extends Component {
  constructor(props: any) {
    super(props);
  }
  render(){
    return (
			<Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) =>
          <MyScene navigator={navigator} title={ "MyScene 1" } rightButton={"Next"} />
        }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

const styles = {
  navBar: {
    backgroundColor: '#D3D3D3',
    height: 50,
  },
	navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
};

AppRegistry.registerComponent('SampleApp', () => SampleApp);
