

// import React, {useState, useEffect} from 'react';
// import { StyleSheet, FlatList, Text, View, Button, Linking } from 'react-native';
// import * as Permissions from 'expo-permissions';
// import * as Contacts from 'expo-contacts';
// import * as Calendar from 'expo-calendar';
// function App(props) {

//   const [contacts, setContacts] = useState([]);
//   const [calendar, setCalendar] = useState([]);
//   const [permissions, setPermissions] = useState(false);

//   // const getPermissions = async () => {
//   //   const { status } = await Permissions.askAsync(Permissions.CONTACTS);
//   //   setPermissions(true);
//   // };

//   const getPermissions = async () => {
//     const { status } = await Permissions.askAsync(Permissions.CALENDAR, Permissions.REMINDERS);
//     setPermissions(true);
//   };

//   const showCalendar = async () => {
//     const calendarList = await Calendar.getCalendarsAsync();
//     console.log("🚀 ~ file: App.js ~ line 24 ~ showCalendar ~ calendarList", calendarList[0])
//     setCalendar(calendarList);
//   };

//   // const showContacts = async () => {
//   //   const contactList = await Contacts.getContactsAsync();
//   //   setContacts(contactList.data);
//   // };

//   const call = contact => {
//       //009627888888
//       //
//     let phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, '');
//     let link = `tel:${phoneNumber}`;
//     Linking.canOpenURL(link)
//       .then((supported) => Linking.openURL(link) )
//       .catch(console.error);
//   };

//   useEffect( () => {
//     getPermissions();
//   }, []);

//   return (

//     <View style={styles.container}>
//           {console.log(calendar,'calendar')}
//       <Button
//         onPress={showCalendar}
//         title="Show Contacts"
//       />

//       <View style={styles.section}>
//         <Text>FlatList ...</Text>
//         <FlatList
//           data={calendar}
//           keyExtractor={(item) => item.id}
//           renderItem={({item}) => <Button title={item.source.name} style={styles.person} onPress={() => call(item)} />}
//         />
//       </View>
//     </View>
//   );

// }

// const styles = StyleSheet.create({
//   person: {
//     marginTop:'1em',
//   },
//   section: {
//     margin: 10,
//     flex: 1,
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     flex: 1,
//     justifyContent: 'center',
//     marginTop: 25,
//   },
// });

// export default App;

// /*
//     <ul>
//         <li><button>name</button></li>
//         <li><button>name</button></li>
//         <li><button>name</button></li>
//         <li><button>name</button></li>
//     </ul>

    
//     <ul>
//         contacts.map(c => <li><button>{c.name}</button></li>);
//     </ul>
// */

import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList, Text, View, Button, Linking } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';
import * as Calendar from 'expo-calendar';


function App(props) {
  const [contacts, setContacts] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [permissions, setPermissions] = useState(false);
  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CALENDAR, Permissions.REMINDERS);
    setPermissions(true);
  };

  // const showContacts = async () => {
  //   const contactList = await Contacts.getContactsAsync();
  //   setContacts(contactList.data);
  // };
  const showCalendar = async () => {
    const calendarList = await Calendar.getCalendarsAsync();
    
    setCalendar(calendarList);
  };


  const show = id => {
    Calendar.openEventInCalendar(id)
   };


  // const call = calendar => {
  //     //009627888888
  //     //
  //   let phoneNumber = calendar
  //   let link = `tel:${phoneNumber}`;
  //   Linking.canOpenURL(link)
  //     .then((supported) => Linking.openURL(link) )
  //     .catch(console.error);
  // };
  useEffect( () => {
    getPermissions();
  },[]);
  return (
    <View style={styles.container}>
      <Button
        onPress={showCalendar}
        title="Show Calendar"
      />
      <View style={styles.section}>
        <Text>FlatList ...</Text>
        <FlatList
          data={calendar}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Button title={item.source.name} style={styles.person} onPress={() =>
            //  call(item)
            show(item.id)
            } />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  person: {
    marginTop:'1.2em',
  },
  section: {
    margin: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
});
export default App;
/*
    <ul>
        <li><button>name</button></li>
        <li><button>name</button></li>
        <li><button>name</button></li>
        <li><button>name</button></li>
    </ul>
    <ul>
        contacts.map(c => <li><button>{c.name}</button></li>);
    </ul>
*/



/******************************************************************** Map ************* */

// import * as React from 'react';
// import MapView,{Marker} from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} >
//         <Marker
//         coordinate={{
//           latitude: 37.89554 ,
//           longitude: -120.4324
//         }}
//         />
//         </MapView >
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });