import React from 'react';
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native';
import styles from './styles';
import SafeAreaView from 'react-native-safe-area-view';
import { HomeController, IGymList, IPopularClasses } from './controller';
import { AppStrings } from '../../utils/strings';
import { AppColors } from '../../constants';
import { AppSizes } from '../../utils/sizes';
import GymItem from '../../components/gymItem';
import ClassCategoryItem from '../../components/classCategoryItem';
import PopularClassItem from '../../components/popularClassItem';
import Header from '../../components/header';

export const HomeScreen = () => {

    const { gymList, selectedGym, classCategoryList, onGymSelect, onfavoriteGym, onClassCategory, onPopularClass } = HomeController();

    const renderGymList = ({ item, index }: { item: IGymList, index: number }) => {
        return (
            <GymItem
                item={item}
                index={index}
                handleGymClass={onGymSelect}
                handleFavoriteGym={onfavoriteGym}
            />
        )
    }

    const renderClassCategoryList = ({ item, index }: { item: IPopularClasses, index: number }) => {
        return (
            <ClassCategoryItem
                item={item}
                index={index}
                handleClassCategory={onClassCategory}
            />
        )
    }

    const renderPopularClassList = ({ item, index }: { item: IPopularClasses, index: number }) => {
        return (
            <PopularClassItem
                item={item}
                index={index}
                selectedGymId={selectedGym.id}
                handlePopularClass={onPopularClass}
            />
        )
    }

    const renderEmptyContainer = () => {
        return (
            <View style={styles.centerConatainer}>
                <Text style={styles.noData}>{AppStrings.gym.noData}</Text>
            </View>
        )
    }

    const renderSeparator = () => <View style={styles.separator} />

    const renderClassSeparator = () => <View style={styles.classSeparator} />

    const renderVerticalSeparator = () => <View style={styles.VerticalSeparator} />

    return (
        <SafeAreaView
            style={styles.saContainer}
            forceInset={{ top: 'always', bottom: 'never' }}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={AppColors.white}
                translucent={true}
            />
            <Header />
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
                contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={[styles.recommendedText, { marginVertical: AppSizes.smartScale(20) }]} >{AppStrings.gym.recommended_gyms}</Text>
                    <FlatList
                        data={gymList}
                        renderItem={renderGymList}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={renderSeparator}
                    />
                    <Text style={[styles.recommendedText, { marginBottom: AppSizes.smartScale(10) }]}>{AppStrings.gym.popular_classes}</Text>
                    <FlatList
                        data={classCategoryList}
                        renderItem={renderClassCategoryList}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ padding: 5 }}
                        ItemSeparatorComponent={renderClassSeparator}
                    />
                    <FlatList
                        data={selectedGym.popular_clasess}
                        renderItem={renderPopularClassList}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        style={styles.popularClass}
                        ItemSeparatorComponent={renderVerticalSeparator}
                        ListEmptyComponent={renderEmptyContainer}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}