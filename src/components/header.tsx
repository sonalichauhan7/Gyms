import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppColors, IcDumbbell, IcLocation, IcSearch } from '../constants';
import { IPopularClasses } from '../screens/HomeScreen/controller';
import { AppSizes } from '../utils/sizes';

interface IHeaderProps {

}

function Header({ }: IHeaderProps): JSX.Element {

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <IcDumbbell height={25} width={25} fill={"#FFFFFF"} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <IcLocation height={25} width={25} fill={"#FFFFFF"} />
                    <View style={styles.separator} />
                    <IcSearch height={25} width={25} fill={"#FFFFFF"} />
                    <View style={styles.separator} />
                    <View style={styles.avatar} />
                </View>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.midNightBlue,
        height: AppSizes.smartScale(55),
        width: "100%",
        justifyContent: "center",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: AppColors.black,
        shadowOpacity: 0.05, //for ios
        shadowRadius: 3.84,
        elevation: 5, //for android,
    },
    innerContainer: {
        paddingHorizontal: AppSizes.smartWidthScale(20),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    avatar: {
        height: AppSizes.smartWidthScale(30),
        width: AppSizes.smartWidthScale(30),
        borderRadius: AppSizes.countPixelRatio(30),
        backgroundColor: AppColors.aliceBlue
    },
    separator: {
        marginRight: AppSizes.smartWidthScale(20)
    }
})