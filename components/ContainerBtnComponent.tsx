import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

//constants
import Colors from '../constants/Colors';

interface ContainerBtnComponentTypes {
    title: string,
    icon: any,
    containerBtnInputText: string
}

const ContainerBtnComponent = ({title, icon, containerBtnInputText}: ContainerBtnComponentTypes) => {
    return (
        <View style={styles.containerBtn}>

            <Text style={styles.containerBtnText}>
                {title}
            </Text>

            <View style={styles.containerBtnInput}>
                <Ionicons name={icon} size={25} />
                <Text style={{ right: 115 }}>
                    {containerBtnInputText}
                </Text>
                <Ionicons style={Colors.colorIcons} name="chevron-forward-outline" size={30} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    containerBtn: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    containerBtnInput: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        height: 40,
    },
    containerBtnText: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default ContainerBtnComponent;