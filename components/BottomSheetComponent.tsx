import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useStore from '../store/store'

const BottomSheetComponent = () => {

    const isVisible = useStore((state) => state.isVisible);

    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => useStore.setState({ isVisible: false }),
        },
    ];

    return (

        <SafeAreaProvider>
            {/* <Button
                title="Open Bottom Sheet"
                onPress={() => useStore.setState({ isVisible: true })}
                buttonStyle={styles.button}
            /> */}
            <BottomSheet modalProps={{}} isVisible={isVisible}>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
});

export default BottomSheetComponent;