import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const FilmeValue = () => {
  const [filme, setFilme] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [rating, setRating] = useState();

  const addFilme = () => {
    const newFilme = { titulo, genero, rating };
    setFilme([...filme, newFilme]);
    setTitulo('');
    setGenero('');
    setRating('');
  };

  const removeFilme = (index) => {
    const novoFilme = [...filme];
    novoFilme.splice(index, 1);
    setFilme(novoFilme);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de filmes para assistir</Text>
      <FlatList
        data={filme}
        renderItem={({ item, index }) => (
          <View>
            <Text style={styles.filmes}>*{item.titulo}</Text>
            <Text style={styles.filmes}>*{item.genero}</Text>
            <Text style={styles.filmes2}>*{item.rating}</Text>
            <TouchableOpacity
              style={styles.removerButton}
              onPress={() => removeFilme(index)}
            >
              <Text>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Genero"
        value={genero}
        onChangeText={setGenero}
      />
      <TextInput
        style={styles.input}
        placeholder="Avaliação"
        value={rating}
        onChangeText={setRating}
      />
      <Button title="ADD Filme" onPress={addFilme} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'Top',
    backgroundColor: '#ffffff',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  input: {
    width: 200,
    height: 20,
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  filmes: {
    position: 'relative',
    left: 100,
  },
  filmes2: {
    position: 'relative',
    left: 100,
    paddingBottom: 20,
  },
  removerButton: {
    width: 55,
    height: 23,
    position: 'relative',
    top: -55,
    left: 30,
    backgroundColor: '#fc0000',
    borderRadius: 3,
    outlineStyle: 'solid',
    outlineColor: 'black',
  },
});

export default FilmeValue;