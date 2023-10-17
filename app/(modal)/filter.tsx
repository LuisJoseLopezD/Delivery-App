import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { CheckBox } from '@rneui/themed';
import { useNavigation } from "expo-router";

const Filter = () => {

    const [checked, setChecked] = useState(false);

    const navigation = useNavigation();

    return (

        <><View style={styles.containerBtn}>

            <View style={styles.containerBtnInput}>
                <Ionicons name="chevron-up-circle-outline" size={30} />
                <Text style={styles.containerBtnText}>
                    Sort
                </Text>
                <Ionicons style={Colors.colorIcons} name="chevron-forward-outline" size={30} />
            </View>

            <View style={styles.containerBtnInput}>
                <Ionicons name="chevron-up-circle-outline" size={30} />
                <Text style={styles.containerBtnText}>
                    Sort
                </Text>
                <Ionicons style={Colors.colorIcons} name="chevron-forward-outline" size={30} />
            </View>

            <View style={styles.containerBtnInput}>
                <Ionicons name="chevron-up-circle-outline" size={30} />
                <Text style={styles.containerBtnText}>
                    Sort
                </Text>
                <Ionicons style={Colors.colorIcons} name="chevron-forward-outline" size={30} />
            </View>

            <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 20, marginLeft: 25, marginBottom: 20 }}>
                Categories
            </Text>

            <View style={styles.containerBtnInput}>
                <Text style={styles.containerBtnCategories}>
                    Alcohol (458)
                </Text>
                <CheckBox
                    checkedColor='#00CED1'
                    containerStyle={{
                        marginBottom: -10,
                        left: 15,
                    }}
                    checked={checked}
                    onPress={() => setChecked(!checked)} />
            </View>

            <View style={styles.containerBtnInput}>
                <Text style={styles.containerBtnCategories}>
                    Comida China (458)
                </Text>
                <CheckBox
                    checkedColor='#00CED1'
                    containerStyle={{
                        marginBottom: -10,
                        left: 15,
                    }}
                    checked={checked}
                    onPress={() => setChecked(!checked)} />
            </View>


            <View style={styles.btnConfirmContainer}>

                <TouchableOpacity
                    style={styles.btnConfirm}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.btnConfirmText}>
                        Done
                    </Text>
                </TouchableOpacity>

            </View>


        </View>

        </>


    );
}

const styles = StyleSheet.create({
    containerBtn: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 0,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    containerBtnInput: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        height: 40,
    },
    containerBtnText: {
        fontSize: 16,
        right: 115,
        fontWeight: '500',
    },
    containerBtnCategories: {
        fontSize: 16,
        left: 5,
        fontWeight: '500',
    },
    btnConfirmContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingHorizontal: 0,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    btnConfirm: {
        backgroundColor: '#00CED1',
        marginHorizontal: 20,
        maxHeight: 45,
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
})

export default Filter;