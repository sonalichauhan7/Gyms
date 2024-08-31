import { StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../../constants';
import { AppSizes } from '../../utils/sizes';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: AppColors.aliceBlue
    },
    container: {
        flex: 1,
        backgroundColor: AppColors.aliceBlue,
        marginLeft: AppSizes.smartWidthScale(20)
    },
    scrollContainer: {
        paddingBottom: AppSizes.smartScale(30),
        flexGrow: 1,
    },
    recommendedText: {
        color: AppColors.black,
        fontSize: AppSizes.countPixelRatio(22),
        fontFamily: AppFonts.BOLD
    },
    mapContainer: {
        height: AppSizes.smartScale(90),
        width: AppSizes.smartWidthScale(200),
    },
    separator: {
        marginHorizontal: AppSizes.smartScale(6)
    },
    classSeparator: {
        marginHorizontal: AppSizes.smartScale(8)
    },
    VerticalSeparator: {
        marginVertical: AppSizes.smartScale(6)
    },
    popularClass: {
        flex: 1,
        marginRight: AppSizes.smartWidthScale(20),
        marginTop: AppSizes.smartScale(20)
    },
    centerConatainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noData: {
        color: AppColors.black,
        fontSize: AppSizes.countPixelRatio(12),
        fontFamily: AppFonts.SEMI_BOLD
    },
})

export default styles;