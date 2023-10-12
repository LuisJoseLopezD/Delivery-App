import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//constants
import Colors from '../constants/Colors';


const SearchBarComponent = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (search: string): void => {
        setSearch(search);
    };

    return (


        <View style={styles.searchContainer}>

            <SearchBar
                platform="android"
                containerStyle={{
                    height: 50,
                    width: 300,
                    borderWidth: 0.05,
                    backgroundColor: "#F0F0F0",
                    borderRadius: 10
                }}
                inputContainerStyle={{
                    top: -8,
                }}
                placeholder="Search..."
                onChangeText={updateSearch}
                value={search}
            />

            <TouchableOpacity>
                <Text style={styles.profile}>
                    <Ionicons style={Colors.colorIcons} name="filter-outline" size={30} />
                </Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    searchContainer: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    profile: {
        borderRadius: 50,
    }
})

export default SearchBarComponent;