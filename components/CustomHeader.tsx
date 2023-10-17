import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

//Components
import BottomSheetComponent from './CustomHeaderComponents/BottomSheetComponent';
import SearchBarComponent from './CustomHeaderComponents/SearchBarComponent';

//store
import useStore from '../store/Store';

//constants
import Colors from '../constants/Colors';


const CustomHeader = () => {

    // const isVisible = useStore((state) => state.isVisible);

    return (

        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <TouchableOpacity>
                    <Text style={styles.bike}>🚴</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => useStore.setState({ isVisible: true })}
                    style={styles.textContainer}
                >
                    <Text style={styles.textContainerTitle}>
                        Delivery · Now
                    </Text>
                    <Text style={styles.textContainerSecondTitle}>
                        Current Location <Text style={Colors.colorIcons}>▼</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.profile}>
                        <Ionicons style={Colors.colorIcons} name="person-circle-outline" size={30} />
                    </Text>
                </TouchableOpacity>

            </View>

            <SearchBarComponent />
            <BottomSheetComponent />

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        background: 'white',
    },
    container: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    bike: {
        fontSize: 30,
    },
    profile: {
        borderRadius: 50
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        right: 60,
        top: 6.5
    },
    textContainerTitle: {
        paddingHorizontal: 10,
        color: 'gray',
        fontWeight: '500',
    },
    textContainerSecondTitle: {
        paddingHorizontal: 10,
        color: 'black',
        fontWeight: '700',
        fontSize: 16
    },
    searchContainer: {
        height: 60,
        backgroundColor: 'white',
    }
})

export default CustomHeader;