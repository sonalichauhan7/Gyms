import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppColors, AppFonts, AppPngImages, IcFavorite, IcFavoriteSelected } from '../constants';
import { AppStrings } from '../utils/strings';
import { AppSizes } from '../utils/sizes';
import { IGymList } from '../screens/HomeScreen/controller';

interface IGymItemProps {
    item: IGymList;
    index: number;
    handleGymClass: (item: IGymList) => void;
    handleFavoriteGym: (id: number) => void;
}

function GymItem({ item, index, handleGymClass, handleFavoriteGym }: IGymItemProps): JSX.Element {

    return (
        <TouchableOpacity onPress={() => handleGymClass(item)} activeOpacity={0.9} style={styles.gymCard}>
            <Image source={AppPngImages.ImgMap} style={styles.map} resizeMode={"cover"} />
            <Image source={AppPngImages.ImgGymRebel} style={styles.gymImage} resizeMode={"cover"} />
            <TouchableOpacity style={styles.favContainer} onPress={() => handleFavoriteGym(item.id)} activeOpacity={0.9}>
                {
                    item.favorite ? <IcFavoriteSelected height={30} width={30} fill={"#145da0"} /> :
                        <IcFavorite height={30} width={30} />
                }
            </TouchableOpacity>
            <View style={styles.detailContainer}>
                <View style={styles.gymTitleContainer}>
                    <Text style={styles.gymTitle}>{item.title}</Text>
                    <View>
                        <Text style={styles.gymPrice}>{`$${item.price}`}</Text>
                        <Text style={styles.day}>{AppStrings.gym.per_day}</Text>
                    </View>
                </View>
                <View style={[styles.gymTitleContainer, { marginTop: AppSizes.smartScale(5), alignItems: "center" }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: AppSizes.countPixelRatio(12), alignSelf: "center" }}>⭐  </Text>
                        <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default GymItem;

const styles = StyleSheet.create({
    gymCard: {
        marginBottom: AppSizes.smartScale(10),
        backgroundColor: AppColors.white,
        height: AppSizes.smartScale(280),
        width: AppSizes.smartWidthScale(250),
        borderTopLeftRadius: AppSizes.countPixelRatio(10),
        borderTopRightRadius: AppSizes.countPixelRatio(10),
        borderBottomLeftRadius: AppSizes.countPixelRatio(25),
        borderBottomRightRadius: AppSizes.countPixelRatio(25),
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
    },
    map: {
        height: AppSizes.smartScale(100),
        width: AppSizes.smartWidthScale(250),
        borderTopLeftRadius: AppSizes.countPixelRatio(10),
        borderTopRightRadius: AppSizes.countPixelRatio(10),
    },
    gymImage: {
        height: AppSizes.smartScale(150),
        width: AppSizes.smartWidthScale(259),
        borderTopLeftRadius: AppSizes.countPixelRatio(30),
        borderTopRightRadius: AppSizes.countPixelRatio(30),
        position: "absolute",
        top: 60,
    },
    favContainer: {
        position: "absolute",
        top: 80,
        right: 15
    },
    detailContainer: {
        width: AppSizes.smartWidthScale(245),
        position: "absolute",
        bottom: 20,
        paddingHorizontal: AppSizes.smartWidthScale(10)
    },
    gymTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    gymTitle: {
        color: AppColors.black,
        fontFamily: AppFonts.SEMI_BOLD,
        fontSize: AppSizes.countPixelRatio(18),
    },
    gymPrice: {
        color: AppColors.midNightBlue,
        fontFamily: AppFonts.SEMI_BOLD,
        fontSize: AppSizes.countPixelRatio(16),
    },
    day: {
        color: AppColors.black,
        fontFamily: AppFonts.REGULAR,
        fontSize: AppSizes.countPixelRatio(14),
        textAlign: "right",
    },
    rating: {
        color: AppColors.black,
        fontFamily: AppFonts.MEDIUM,
        fontSize: AppSizes.countPixelRatio(16),
    },
    date: {
        color: AppColors.black,
        fontFamily: AppFonts.REGULAR,
        fontSize: AppSizes.countPixelRatio(15),
    }
})