import React from 'react';
import Activities from './src/Activities/Activities';
import Head from './src/Header/Head';
import Styles from './src/Header/Headerstyle';
import Mode from './src/Mode/Mode';
import PlanTrip from './src/PlanTrip/PlanTrip';
import PopularDestinations from './src/PopularDestinations/PopularDestinations';
import Traveldetails from './src/TravelDetails/Traveldetails';
import TripTypes from './src/TripTypes/TripTypes';
import { StatusBar,FlatList,SafeAreaView, View } from 'react-native';
import { UseZustand } from './Store/UseZustand';
function App() {
    const DarkMode = UseZustand((state)=>state.Mode);
    const Data = [
      {key:"Head",component:<Head />},
      {key:"Mode",component:<Mode />},
      {key:"PopularDestinations",component:<PopularDestinations />},
      {key:"Traveldetails",component:<Traveldetails />},
      {key:"Activities",component:<Activities />},
      {key:"TripTypes",component:<TripTypes />},
      {key:"PlanTrip",component:<PlanTrip />},
/*       {key:"Head",component:<Head />},
      {key:"Head",component:<Head />},
      {key:"Head",component:<Head />}, */
    ]
  return (
    <SafeAreaView style={[Styles.holder,{backgroundColor:DarkMode?"black":'white'}]}>
      <StatusBar
        barStyle={DarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={DarkMode?'black':'rgb(29, 198, 207)'}
      />
      <FlatList 
      data={Data}
      renderItem={({item})=>(<View>{item.component}</View>)}
      />
    </SafeAreaView>
  );
}

export default App;
