import { StyleSheet } from "react-native";
import { colors, textSizes, vh, vw } from "../../utils/globalStyles";

export const styles = StyleSheet.create({
    faq: {
        flex: 1,
    },
    faqTitle: {
        position: 'absolute',
        zIndex: 1,
        top: '6%',
        left: '5%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: textSizes._20pt,
        color: colors.color2
    },
    faqPrincipalContent: {
        marginTop: vh(13),
        marginHorizontal: vw(-10)
    },
    faqCard: {
        backgroundColor: colors.color2,
        paddingHorizontal: vw(6),
        paddingVertical: vw(4),
        borderRadius: vw(2),
        marginBottom: vh(3)
    },
    faqCardTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: textSizes._16pt,
        color: colors.color4
    },
    faqCardDescription: {
        fontFamily: 'Poppins-Light',
        fontSize: textSizes._12pt,
        color: colors.color4,
        paddingTop: vw(4)
    },
})