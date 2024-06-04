import React from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import CardReceita from '../componentes/cardReceita'; 

const receitas = [
    {
        id: 1,
        imagem: 'https://img.cybercook.com.br/receitas/564/lasanha-de-carne-moida-2.jpeg',
        titulo: 'Lasanha',
        tempo: '1h',
        porcoes: 10,
        dificuldade: 'Fácil',
    },
    {
        id: 2,
        imagem: 'https://example.com/peixe-frito.jpg',
        titulo: 'Peixe-frito',
        tempo: '1h',
        porcoes: 10,
        dificuldade: 'Fácil',
    },
    {
        id: 3,
        imagem: 'https://example.com/bolo-cenoura.jpg',
        titulo: 'Bolo de Cenoura',
        tempo: '1h',
        porcoes: 10,
        dificuldade: 'Fácil',
    },
];

const TelaInicial = () => {
    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar receitas..."
            />
            {receitas.map((receita) => (
                <CardReceita
                    key={receita.id}
                    imagem={receita.imagem}
                    titulo={receita.titulo}
                    tempo={receita.tempo}
                    porcoes={receita.porcoes}
                    dificuldade={receita.dificuldade}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
        marginBottom: 16,
    },
});

export default TelaInicial;
