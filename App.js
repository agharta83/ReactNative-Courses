import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import HomeComponent from './src/home';
import ProfileComponent from './src/profile';
import PostsComponent from './src/posts';

/** STACK Navigation **/
// const App = () => {
//   return (
//     <Router>
//       <Scene key='root'>
//         <Scene key='Home'
//           component={HomeComponent}
//           title='Home'
//           initial
//         />
//         <Scene key='profile'
//           component={ProfileComponent}
//           title='Profile'
//         />
//       </Scene>
//     </Router>
//   );
// }

/** TAB Navigation **/

const App = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar panHandlers={null}>
        <Tabs
          key='tabbar'
          tabBarPosition= 'bottom'
          swipeEnabled
          tabBarStyle={{ backgroundColor: '#fff' }}
          activeBackgroundColor= 'grey'
          inactiveBackgroundColor= 'rgba(255, 0, 0, 0.5)'
          showIcon={true}
          labelStyle={{ fontSize: 12 }}
        >

          <Scene key='Home' name='home' icon={Entypo} size={25} tabBarLabel='Home'>
            <Scene
              key='Home'
              component={HomeComponent}
              title= 'Home'
              initial
            />
          </Scene>

          <Scene key='Profile' name='user' icon={FontAwesome} size={25} tabBarLabel='Profile'>
            <Scene
              key='Profile'
              component={ProfileComponent}
              title='Profile'
            />
          </Scene>

          <Scene key='Posts' name='news' icon={Entypo} size={25} tabBarLabel='Posts'>
            <Scene
              key='Posts'
              component={PostsComponent}
              title='Posts'
            />
          </Scene>

        </Tabs>
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({

});

export default App;

