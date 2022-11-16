import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screen/Login'; 
import Registration from '../screen/Registration'
import Detail from '../screen/Detail';
import Home from '../screen/Home'

const StackMain = createNativeStackNavigator()

const Tab = createBottomTabNavigator();

const Stack = () => {
  return (
    <> 
      <NavigationContainer>
        <StackMain.Navigator>
            <StackMain.Screen name="Login" component={Login}/>
            <StackMain.Screen name="Regsitration" component={Registration}/>
            <StackMain.Screen name="Detail" component={Detail}/>
            <StackMain.Screen name="HomeScreen" component={BottomTab}/>
        </StackMain.Navigator>
      </NavigationContainer>
    </>
  )
}

const BottomTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{ showLabel: false }}
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconNombre;
                    if (route.name === 'Home') {
                        iconNombre = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Map') {
                        iconNombre = focused ? 'location-sharp' : 'location-outline'
                    } else if (route.name === 'Configuracion') {
                        iconNombre = focused ? 'settings-sharp' : 'settings-outline'
                    }
                    return <Ionicons name={iconNombre} size={20} color="#fff" />
                },
                tabBarShowLabel: false
            })
            }
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />

            <Tab.Screen
                name="Map"
                component={Map} />


        </Tab.Navigator>
    )
}



const MainStack = () =>{
  <NavigationContainer>
    <Stack/>
  </NavigationContainer>
}

export default MainStack