import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppColors } from '../constants';
import { IPopularClasses } from '../screens/HomeScreen/controller';

interface IClassItemProps {
    item: IPopularClasses;
    index: number;
    handleClassCategory: (id: number) => void;
}

function ClassCategoryItem({ item, index, handleClassCategory }: IClassItemProps): JSX.Element {

    return (
        <TouchableOpacity style={[styles.classContainer, { backgroundColor: item.favorite ? AppColors.midNightBlue : AppColors.white }]}
            onPress={() => handleClassCategory(item.id)} activeOpacity={0.9}>
            {item.favorite ? <item.image height={50} width={50} fill={"#FFFFFF"} /> : <item.image height={50} width={50} fill={"#145da0"} />}
        </TouchableOpacity>
    );
}

export default ClassCategoryItem;

const styles = StyleSheet.create({
    classContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
    }
})