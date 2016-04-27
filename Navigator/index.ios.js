import React, {
  AppRegistry,
  Component,
  Navigator,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class MyScene extends Component {
  constructor(props: any) {
    super(props);
  }
  render(){
  	return(
      <View style={{paddingTop: 60}}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
    if(index === 0){
      return null;
    }
    return(
      <TouchableOpacity onPress={() => {navigator.pop()}}>
      <Text>Back</Text>
      </TouchableOpacity>
    )
  },
  Title: function( route, navigator, index, navState ){
    return(
      <Text>{ route.name }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return(
      <TouchableOpacity onPress={() => {navigator.push({id: 'second', name: 'My Second Scene'})}}>
      <Text>Next</Text>
      </TouchableOpacity>
    )
  },
};

class SampleApp extends Component {
  constructor(props: any) {
    super(props);
  }
  navRender(route, navigator) {
    switch (route.id) {
      case 'first':
        return <MyScene navigator={navigator} title={ "MyScene 1" } rightButton={"Next"} />;
      case 'second':
        return <MyScene navigator={navigator} title={ "MyScene 2" } rightButton={"Next"} />;
      default:
        break;
    }
  }
  render(){
    return (
			<Navigator
        initialRoute={{id: 'first', name: 'My First Scene'}}
        renderScene={this.navRender}
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
