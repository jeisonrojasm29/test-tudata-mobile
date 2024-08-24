import { StyleSheet } from "react-native";
import { colors, textSizes } from "../../utils/globalStyles";

export const styles = StyleSheet.create({
    aboutUs: {
        flex: 1
    },
    aboutUsTitle: {
        position: 'absolute',
        zIndex: 1,
        top: '6%',
        left: '5%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: textSizes._20pt,
        color: colors.color2
    }
})