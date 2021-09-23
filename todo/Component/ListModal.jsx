import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function ListModal(props) {
    const [list, setList] = useState('');
    const [description, setDescription] = useState('');
    const [isValid, setIsValid] = useState('false');
    const { visible, onClose } = props;

    //console.log('visible :>> ', visible);

    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    visible={visible}
                    onRequestClose={onClose}
                >
                   
                    <TextInput
                        style={styles.input}
                        placeholder="saisir le nom d'une list"
                        onChangeText={setList}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="saisir une description"
                        onChangeText={setDescription}
                    />
                    <Button
                        title='soumettre'
                        disabled={list.length >= 5 ? false : true}
                        onPress={onClose}
                    />

                    
                </Modal>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    
})
