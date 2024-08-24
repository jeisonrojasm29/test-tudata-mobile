import { StyleSheet } from "react-native";
import { colors, textSizes, vh, vw } from "../../utils/globalStyles";

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
    },
    aboutUsPrincipalContent: {
        marginTop: vh(13),
        marginHorizontal: vw(-10)
    },
    aboutUsCard: {
        backgroundColor: colors.color2,
        paddingHorizontal: vw(6),
        paddingVertical: vw(4),
        borderRadius: vw(2),
        marginBottom: vh(3)
    },
    aboutUsCardTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: textSizes._16pt,
        color: colors.color4
    },
    aboutUsCardDescription: {
        fontFamily: 'Poppins-Light',
        fontSize: textSizes._12pt,
        color: colors.color4,
        paddingTop: vw(4)
    },
    aboutUsSpecialWord1:{
        fontFamily: 'Quicksand-Bold'
    },
    aboutUsPoliticsCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    aboutUsPoliticsCardImg:{
        width: vw(8),
        height: vw(8)
    }
})