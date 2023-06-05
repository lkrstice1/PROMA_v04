import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const CiljUnos = (props) => {
  const [unos, promjenaUnosa] = useState('');

  const noviUnos = (tekst) => {
    promjenaUnosa(tekst);
  };

  const noviCilj = () => {
    props.postaviCiljeve(unos);
    promjenaUnosa('');
  };

  return (
    <Modal visible = {props.vidljiv} animationType = "slide">
      <View style={stilovi.viewUnos}>
        <TextInput
          placeholder="dodaj cilj"
          style={stilovi.unos}
          value={unos}
          onChangeText={noviUnos}
        />
        <Button title="Odustani" color="red" onPress={props.odustani} />
        <Button title="Dodaj" onPress={noviCilj}/>
      </View>
    </Modal>
  );
};

const stilovi = StyleSheet.create({
  unos: {
    width: '70%',
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  viewUnos: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CiljUnos;
