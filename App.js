import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

export default function App() {
  const [unos, postaviUnos] = useState('');
  const [ciljevi, postaviCiljeve] = useState([]);

  const noviUnos = (tekst) => {
    postaviUnos(tekst);
  };

  const noviCilj = () => {
    console.log(unos);
    postaviCiljeve(ciljevi.concat(unos));
    //postaviUnos('');
  };

  return (
    <View style={stilovi.ekran}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="dodaj cilj"
          style={stilovi.unos}
          value={unos}
          onChangeText={noviUnos}
        />
        <Button title="Dodaj" onPress={noviCilj} />
      </View>
      <ScrollView style={{margin: 10}}>
        <View>
          {ciljevi.map((cilj) => (
            <View key={cilj} style={stilovi.lista}>
              <Text>{cilj}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const stilovi = StyleSheet.create({
  ekran: {
    padding: 50,
  },
  unos: {
    width: '70%',
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
