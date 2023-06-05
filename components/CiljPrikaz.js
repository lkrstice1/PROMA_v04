import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const CiljPrikaz = (props) => {
  return(
    <TouchableOpacity onPress={props.brisanje}>
      <View style={stilovi.lista}>
        <Text>{props.naslov}</Text>
      </View>
    </TouchableOpacity>
  )
}

const stilovi = StyleSheet.create({
  lista: {padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }

})

export default CiljPrikaz