import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import CiljPrikaz from './components/ciljPrikaz';
import CiljUnos from './components/ciljUnos';

export default function App() {
  const [ciljevi, postaviCiljeve] = useState([]);
  const [unosVidljiv, postaviVidljivostUnosa] = useState(false);

  const noviCilj = (unos) => {
    postaviCiljeve((ciljevi) => [
      ...ciljevi,
      { key: Math.random().toString(), value: unos },
    ]);
    postaviVidljivostUnosa(false)
  };

  const brisiCilj = (ciljID) => {
    postaviCiljeve((ciljevi) => {
      return ciljevi.filter((c) => c.broj !== ciljID);
    });
  };

  const odustaniModal = () => {
    postaviVidljivostUnosa(false)
  }

  return (
    <View style={stilovi.ekran}>
      <Button
        title="Dodaj novi cilj"
        onPress={() => postaviVidljivostUnosa(true)}
      />
      <CiljUnos vidljiv={unosVidljiv} postaviCiljeve={noviCilj} odustani={odustaniModal}/>
      <FlatList
        keyExtractor={(item, index) => item.broj}
        data={ciljevi}
        renderItem={(el) => (
          <CiljPrikaz
            naslov={el.item.value}
            id={el.item.key}
            brisanje={() => brisiCilj(el.item.broj)}
          />
        )}
      />
    </View>
  );
}

const stilovi = StyleSheet.create({
  ekran: {
    padding: 50,
  },
});
