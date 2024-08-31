import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppColors, AppFonts, IcFavorite, IcFavoriteSelected, IcLocation, IcWatch } from '../constants';
import { IGymList, IPopularClasses } from '../screens/HomeScreen/controller';
import { AppSizes } from '../utils/sizes';
import { AppStrings } from '../utils/strings';

interface IClassItemProps {
    item: IPopularClasses;
    index: number;
    selectedGymId: number;
    handlePopularClass: (gymId: number, classId: number) => void;
}

function PopularClassItem({ item, index, selectedGymId, handlePopularClass }: IClassItemProps): JSX.Element {

    return (
        <View style={styles.classContainer}>
            <Image source={item.image} style={styles.classImage} resizeMode={"stretch"} />
            <TouchableOpacity style={styles.favContainer} onPress={() => handlePopularClass(selectedGymId, item.id)} activeOpacity={0.9}>
                {
                    item.favorite ? <IcFavoriteSelected height={30} width={30} fill={"#145da0"} /> :
                        <IcFavorite height={30} width={30} />
                }
            </TouchableOpacity>
            <View style={styles.innerContainer} >
                <View style={styles.titleContainer}>
                    <Text style={styles.classTitle}>{item.title}</Text>
                    <View style={{ marginRight: AppSizes.smartWidthScale(10) }}>
                        <Text style={styles.classPrice}>{`$${item.price}`}</Text>
                        <Text style={styles.day}>{AppStrings.gym.per_day}</Text>
                    </View>
                </View>

                <Text style={styles.gymSeven}>{AppStrings.gym.gym_seven}</Text>
                <View style={styles.locationContainer}>
                    <IcLocation height={18} width={18} fill={"#ADD8E6"} />
                    <Text style={styles.location}>{item.location}</Text>
                </View>
                <View style={styles.locationContainer}>
                    <IcWatch height={18} width={18} fill={"#ADD8E6"} />
                    <Text style={styles.location}>{item.time}</Text>
                </View>
            </View>
        </View>
    );
}

export default PopularClassItem;

const styles = StyleSheet.create({
    classContainer: {
        height: AppSizes.smartScale(125),
        width: "100%",
        borderRadius: AppSizes.countPixelRatio(20),
        backgroundColor: AppColors.white,
        elevation: 3,
        flexDirection: "row"
    },
    classImage: {
        height: AppSizes.smartScale(125),
        width: "40%",
        borderTopLeftRadius: AppSizes.countPixelRatio(20),
        borderBottomLeftRadius: AppSizes.countPixelRatio(20),
    },
    favContainer: {
        position: "absolute",
        top: 15,
        left: 110
    },
    innerContainer: {
        flex: 1,
        marginLeft: AppSizes.smartWidthScale(10),
        paddingVertical: AppSizes.smartScale(10)
    },
    titleContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"
    },
    classTitle: {
        width: "60%",
        color: AppColors.black,
        fontFamily: AppFonts.SEMI_BOLD,
        fontSize: AppSizes.countPixelRatio(16)
    },
    classPrice: {
        color: AppColors.midNightBlue,
        fontFamily: AppFonts.SEMI_BOLD,
        fontSize: AppSizes.countPixelRatio(16)
    },
    day: {
        color: AppColors.black,
        fontFamily: AppFonts.REGULAR,
        fontSize: AppSizes.countPixelRatio(14),
        textAlign: "right",
    },
    gymSeven: {
        color: AppColors.black,
        fontFamily: AppFonts.MEDIUM,
        fontSize: AppSizes.countPixelRatio(12),
    },
    locationContainer: {
        flexDirection: "row",
        marginTop: AppSizes.smartScale(10),
        alignItems: "center"
    },
    location: {
        color: AppColors.black,
        fontFamily: AppFonts.REGULAR,
        fontSize: AppSizes.countPixelRatio(12),
        marginLeft: AppSizes.smartWidthScale(3)
    }
})