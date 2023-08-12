import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import styles from './assets/styles';
import HomeScreen from './components/container/Home';
import MatchesScreen from './components/container/Matches';
import MessagesScreen from './components/container/Messages';
import ProfileScreen from './components/container/Profile';
import Icon from './components/Icon';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const App = createBottomTabNavigator(
  {
    Explore: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? '#7444C0' : '#363636';
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="explore" />
            </Text>
          );
        },
      },
    },
    Matches: {
      screen: MatchesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? '#7444C0' : '#363636';
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="heart" />
            </Text>
          );
        },
      },
    },
    Chat: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? '#7444C0' : '#363636';
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="chat" />
            </Text>
          );
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? '#7444C0' : '#363636';
          return (
            <Text style={[styles.iconMenu, { color: iconFocused }]}>
              <Icon name="user" />
            </Text>
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#7444C0',
      inactiveTintColor: '#363636',
      labelStyle: {
        fontSize: 14,
        textTransform: 'uppercase',
        paddingTop: 10,
      },
      style: {
        backgroundColor: '#FFF',
        borderTopWidth: 0,
        paddingVertical: 30,
        height: 60,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: '#000',
        shadowOffset: { height: 0, width: 0 },
      },
    },
  }
);

export default createAppContainer(App);
