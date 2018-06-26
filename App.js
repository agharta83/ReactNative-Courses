import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Stack, Tabs, Drawer } from 'react-native-router-flux';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import HomeComponent from './src/home';
import ProfileComponent from './src/profile';
import PostsComponent from './src/posts';
import SidedrawerComponent from './src/sidedrawer';

/** STACK Navigation **/
const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='Home'
          component={HomeComponent}
          title='Home'
          initial
        />

        {/** DRAWER Navigation **/}
        <Drawer
          hideNavBar
          key='drawer'
          contentComponent={SidedrawerComponent}
          drawerPosition= 'left'
          drawerWidth={300}
          navigationBarStyle={{ backgroundColor: 'black' }}
          titleStyle={{ color: 'white' }}
          navBarButtonColor= 'red'
        >

          {/** TAB Navigation **/}
          <Scene hideNavBar panHandlers={null}>
            <Tabs
              key='tabbar'
              tabBarPosition= 'bottom'
              swipeEnabled
              activeBackgroundColor= 'grey'
              inactiveBackgroundColor= 'black'
              showIcon={true}
              labelStyle={{ fontSize: 12, color: 'white' }}
            >

              {/** TODO activeTintColor doesn't work ! **/}
              <Scene key='Profile' name='user' icon={FontAwesome} color='white' size={25} tabBarLabel='Profile'>
                <Scene
                  key='Profile'
                  component={ProfileComponent}
                  title='Profile'
                />
              </Scene>
  
              <Scene key='Posts' name='news' icon={Entypo} color='white' size={25} tabBarLabel='Posts'>
                <Scene
                  key='Posts'
                  component={PostsComponent}
                  title='Posts'
                />
              </Scene>
  
            </Tabs>
          </Scene>
        </Drawer>
 
      </Scene>
    </Router>
  );
}



const styles = StyleSheet.create({

});

export default App;

