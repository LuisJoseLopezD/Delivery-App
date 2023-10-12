import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//store
import useStore from '../store/store'

//components
import ContainerBtnComponent from './ContainerBtnComponent';

const BottomSheetComponent = () => {

    const isVisible = useStore((state) => state.isVisible);

    return (

        <SafeAreaProvider>

            <BottomSheet modalProps={{}} isVisible={isVisible}>

                <View style={styles.sheetBody}>

                    <View style={styles.btnGroup}>

                        <Button
                            buttonStyle={{
                                width: 130,
                                height: 45,
                                backgroundColor: '#00CED1',
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 30,
                                marginBottom: 30,
                            }}
                        >Delivery
                        </Button>

                        <Button
                            buttonStyle={{
                                width: 130,
                                height: 45,
                                backgroundColor: 'orange',
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 30,
                                marginBottom: 30,
                            }}
                        >Pick Up
                        </Button>

                    </View>

                    <ContainerBtnComponent
                        title="Your Location"
                        icon="location-outline"
                        containerBtnInputText="London"
                    />

                    <ContainerBtnComponent
                        title="Arrival Time"
                        icon="stopwatch-outline"
                        containerBtnInputText="Now"
                    />

                    <TouchableOpacity
                        style={styles.btnConfirm}
                        onPress={() => useStore.setState({ isVisible: false })}
                    >
                        <Text style={styles.btnConfirmText}>
                            Confirm
                        </Text>
                    </TouchableOpacity>

                </View>

            </BottomSheet>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    sheetBody: {
        backgroundColor: '#F0F0F0',
        paddingTop: 20,
    },
    button: {
        margin: 10,
    },
    btnConfirm: {
        backgroundColor: '#00CED1',
        marginHorizontal: 20,
        height: 45,
        borderRadius: 5,
        marginBottom: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnConfirmText: {
        fontSize: 16,
        color: 'white'
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BottomSheetComponent;