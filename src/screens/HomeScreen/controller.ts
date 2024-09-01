import { useEffect, useState } from 'react'
import { classCategory, gymData } from '../../utils/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from '../../constants';

export interface IGymList {
    id: number;
    title: string;
    rating: number;
    price: number;
    favorite: boolean;
    date: string;
    popular_clasess: IPopularClasses[]
}

export interface IPopularClasses {
    id: number;
    title: string;
    price: number;
    favorite: boolean;
    location: string;
    time: string;
    image: any;
}

export const HomeController = () => {
    const [gymList, SetGymList] = useState<IGymList[]>(gymData);
    const [selectedGym, SetSelectedGym] = useState<IGymList>(gymData[0]);
    const [selectedGymId, SetSelectedGymId] = useState<number>(gymData[0].id);
    const [classCategoryList, SetClassCategoryList] = useState<IPopularClasses[]>(classCategory);

    useEffect(() => {
        loadFavoriteGyms();
        loadFavoriteCategory();
        loadFavoriteClass();
    }, []);

    useEffect(() => {
        loadFavoriteClass();
    }, [selectedGymId]);

    const loadFavoriteGyms = async () => {
        try {
            const existingFavorites = await AsyncStorage.getItem(AppConstants.PREF_FAV_GYMS);
            const favoriteArr = existingFavorites != null ? JSON.parse(existingFavorites) : [];

            SetGymList(prevState =>
                prevState.map(item =>
                    favoriteArr.includes(item.id) ? { ...item, favorite: true } : item
                )
            );
        } catch (err) {
            console.log('Error favorite gyms', err);
        }
    };

    const loadFavoriteClass = async () => {
        try {
            const existingFavorites = await AsyncStorage.getItem(AppConstants.PREF_POPULAR_CLASS);
            const favoriteArr = existingFavorites != null ? JSON.parse(existingFavorites) : [];

            SetGymList(prevState =>
                prevState.map(gym => ({
                    ...gym,
                    popular_clasess: gym.popular_clasess.map(classItem =>
                        favoriteArr.includes(classItem.id) ? { ...classItem, favorite: true } : classItem
                    )
                }))
            );
            const updatedGym = gymList.find(gym => gym.id === selectedGymId);
            if (updatedGym) {
                SetSelectedGym(updatedGym);
            }

            SetSelectedGym(prevState => ({
                ...prevState,
                popular_clasess: prevState.popular_clasess.map(classItem =>
                    favoriteArr.includes(classItem.id) ? { ...classItem, favorite: true } : classItem
                )
            }));
        } catch (err) {
            console.log('Error favorite Class', err);
        }
    };

    const loadFavoriteCategory = async () => {
        try {
            const existingFavorites = await AsyncStorage.getItem(AppConstants.PREF_CLASS_CATEGORY);
            const favoriteArr = existingFavorites != null ? JSON.parse(existingFavorites) : [];

            SetClassCategoryList(prevState =>
                prevState.map(item =>
                    favoriteArr.includes(item.id) ? { ...item, favorite: true } : item
                )
            );
        } catch (err) {
            console.log('Error', err);
        }
    };

    const onGymSelect = async (selectedItem: IGymList) => {
        SetSelectedGym(selectedItem)
    }

    const onfavoriteGym = async (selectedItemId: number) => {
        try {
            const existingFavorites = await AsyncStorage.getItem(AppConstants.PREF_FAV_GYMS);
            let favoriteArr = existingFavorites != null ? JSON.parse(existingFavorites) : [];

            if (favoriteArr.includes(selectedItemId)) {
                favoriteArr = favoriteArr.filter((id: number) => id !== selectedItemId);
            } else {
                favoriteArr.push(selectedItemId);
            }
            
            await AsyncStorage.setItem(AppConstants.PREF_FAV_GYMS, JSON.stringify(favoriteArr));

            SetSelectedGymId(selectedItemId);
            SetGymList(prevState =>
                prevState.map(item =>
                    item.id === selectedItemId ? { ...item, favorite: !item.favorite } : item
                )
            );

        } catch (err) {
            console.log('Error', err);
        }
    }

    const onClassCategory = async (selectedItemId: number) => {
        try {
            const existingFavoriteClass = await AsyncStorage.getItem(AppConstants.PREF_CLASS_CATEGORY);
            let favoriteArr = existingFavoriteClass != null ? JSON.parse(existingFavoriteClass) : [];

            if (favoriteArr.includes(selectedItemId)) {
                favoriteArr = favoriteArr.filter((id: number) => id !== selectedItemId);
            } else {
                favoriteArr.push(selectedItemId);
            }

            await AsyncStorage.setItem(AppConstants.PREF_CLASS_CATEGORY, JSON.stringify(favoriteArr));

            SetClassCategoryList(prevState =>
                prevState.map(item =>
                    item.id === selectedItemId ? {
                        ...item,
                        favorite: !item.favorite
                    } : item
                )
            );

        } catch (err) {
            console.log('Error', err);
        }
    }

    const onPopularClass = async (selectedGymId: number, selectedClassId: number) => {
        try {
            const existingFavoriteClass = await AsyncStorage.getItem(AppConstants.PREF_POPULAR_CLASS);
            let favoriteArr = existingFavoriteClass != null ? JSON.parse(existingFavoriteClass) : [];

            if (favoriteArr.includes(selectedClassId)) {
                favoriteArr = favoriteArr.filter((id: number) => id !== selectedClassId);
            } else {
                favoriteArr.push(selectedClassId);
            }
           
            await AsyncStorage.setItem(AppConstants.PREF_POPULAR_CLASS, JSON.stringify(favoriteArr));

            SetSelectedGym(prevState =>
                prevState.id === selectedGymId ? {
                    ...prevState,
                    popular_clasess: prevState.popular_clasess.map(classItem =>
                        classItem.id === selectedClassId ? { ...classItem, favorite: !classItem.favorite } : classItem)
                } : prevState
            );
            SetGymList(prevState =>
                prevState.map(item =>
                    item.id === selectedGymId ? {
                        ...item,
                        popular_clasess: item.popular_clasess.map((classItem) => classItem.id === selectedClassId ? { ...classItem, favorite: !classItem.favorite } : classItem)
                    } : item
                )
            );

        } catch (err) {
            console.log('Error', err);
        }
    }

    return {
        gymList,
        selectedGym,
        classCategoryList,
        onGymSelect,
        onfavoriteGym,
        onClassCategory,
        onPopularClass
    }
}