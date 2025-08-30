import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    flexWrapRow: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    flexRowJustifySpaceBetween: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
    },
    m16: {
        margin: 16,
    },
    p10: {
        padding: 10,
    },
    p12: {
        padding: 12,
    },
    p15: {
        padding: 15,
    },
    p16: {
        padding: 16,
    },
    mlr10: {
        marginLeft: 10,
        marginRight: 10,
    },
    mlr16: {
        marginLeft: 16,
        marginRight: 16,
    },
    mtb16: {
        marginTop: 16,
        marginBottom: 16,
    },
    plr3: {
        paddingLeft: 3,
        paddingRight: 3,
    },
    plr12: {
        paddingLeft: 12,
        paddingRight: 12,
    },
    plr15: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    plr16: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    mt0: {
        marginTop: 0,
    },
    mt20: {
        marginTop: 20,
    },
    mt25: {
        marginTop: 25,
    },
    mt12: {
        marginTop: 12,
    },
    mt15: {
        marginTop: 15,
    },
    mt10: {
        marginTop: 10,
    },
    mt18: {
        marginTop: 18,
    },
    mt16: {
        marginTop: 16,
    },
    mt28: {
        marginTop: 28,
    },
    mt30: {
        marginTop: 30,
    },
    mt35: {
        marginTop: 35,
    },
    mt40: {
        marginTop: 40,
    },
    mt50: {
        marginTop: 50,
    },
    mt1: {
        marginTop: 1,
    },
    mt3: {
        marginTop: 3,
    },
    mt4: {
        marginTop: 4,
    },
    mt5: {
        marginTop: 5,
    },
    mt6: {
        marginTop: 6,
    },
    mt8: {
        marginTop: 8,
    },
    ml20: {
        marginLeft: 20,
    },
    ml25: {
        marginLeft: 25,
    },
    ml16: {
        marginLeft: 16,
    },
    ml0: {
        marginLeft: 0,
    },
    ml10: {
        marginLeft: 10,
    },
    ml12: {
        marginLeft: 12,
    },
    ml8: {
        marginLeft: 8,
    },
    ml3: {
        marginLeft: 3,
    },
    ml5: {
        marginLeft: 5,
    },
    mr0: {
        marginRight: 0,
    },
    mr5: {
        marginRight: 5,
    },
    mr8: {
        marginRight: 8,
    },
    mr10: {
        marginRight: 10,
    },
    mr16: {
        marginRight: 16,
    },
    mr20: {
        marginRight: 20,
    },
    mb0: {
        marginBottom: 0,
    },
    mb20: {
        marginBottom: 20,
    },
    mb12: {
        marginBottom: 12,
    },
    mb15: {
        marginBottom: 15,
    },
    mb18: {
        marginBottom: 18,
    },
    mb10: {
        marginBottom: 10,
    },
    mb8: {
        marginBottom: 8,
    },
    mb5: {
        marginBottom: 5,
    },
    p8: {
        padding: 8,
    },
    pt2: {
        paddingTop: 2,
    },
    pt5: {
        paddingTop: 5,
    },
    pt10: {
        paddingTop: 10,
    },
    pt14: {
        paddingTop: 14,
    },
    pt16: {
        paddingTop: 16,
    },
    pt20: {
        paddingTop: 20,
    },
    pb5: {
        paddingBottom: 5,
    },
    pb10: {
        paddingBottom: 10,
    },
    pb13: {
        paddingBottom: 13,
    },
    pb16: {
        paddingBottom: 16,
    },
    pl2: {
        paddingLeft: 2,
    },
    pl5: {
        paddingLeft: 5,
    },
    pl10: {
        paddingLeft: 10,
    },
    pr5: {
        paddingRight: 5,
    },
    pr10: {
        paddingRight: 10,
    },
    fs8: {
        fontSize: 8,
    },
    fs10: {
        fontSize: 10,
    },
    fs12: {
        fontSize: 12,
    },
    fs13: {
        fontSize: 13,
    },
    fs14: {
        fontSize: 14,
    },
    fs15: {
        fontSize: 15,
    },
    fs16: {
        fontSize: 16,
    },
    fs18: {
        fontSize: 18,
    },
    fs20: {
        fontSize: 20,
    },
    fs22: {
        fontSize: 22,
    },
    fs24: {
        fontSize: 24,
    },
    fs28: {
        fontSize: 28,
    },
    justifyAlignCenter: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    commonTitleText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#6E6D72',
        paddingBottom: 5,
    },
    commonText: {
        fontSize: 14,
        color: '#021501',
        fontWeight: '500',
    },
    commonborderUnderline: {
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEE',
    },
    inputText: {
        fontSize: 14,
        color: '#535153',
        fontWeight: '700',
        marginBottom: 10,
    },
    inputBorderView: {
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#fff',
        borderColor: '#BEC0C3',
        overflow: 'hidden',
    },
    inputBorderViewFocus: {
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#fff',
        borderColor: '#00A651',
        overflow: 'hidden',
    },
    inputBorderViewError: {
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#fff',
        borderColor: '#FF424F',
        overflow: 'hidden',
    },
    defaultMainBtn: {
        backgroundColor: '#00599D',
        overflow: 'hidden',
        borderRadius: 4,
    },
    defaultMainBtnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center',
    },
    selectDropdownSearchInputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectDropdownRowActiveText: {
        fontSize: 14,
        color: '#00599D',
        fontWeight: '600',
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    disabledBtn: {
        backgroundColor: '#E6E7E8',
        overflow: 'hidden',
        borderRadius: 4,
        padding: 10
    },
    color333: {
        color: '#333',
    },
    commonListItemContainerView: {
        backgroundColor: '#fff',
        marginTop: 10,
        // borderRadius: 10,
        // overflow: 'hidden',
    },
    commonListItemHeaderView: {
        backgroundColor: '#ECF1F7',
        padding: 13,
    },
    commonListItemHeaderText: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        color: '#535153',
    },
    commonListItemContentView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    commonListItemContentNumberView: {
        justifyContent: 'center',
        borderRightColor: '#E1E2E4',
        borderRightWidth: 1,
    },
    commonListItemContentNumberText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 12,
        fontWeight: '500',
    },
    commonListItemContentTitleText: {
        color: '#535153',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
    },
    commonListItemContentText: {
        color: '#262527',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right',
    },
    pl15: {
        paddingLeft: 15,
    },
    drawerFilterView: {
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingBottom: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
    drawerFilterTitle: {
        fontWeight: '600',
        fontSize: 14,
        color: '#00599D',
    },
    footerBtnView: {
        borderRadius: 5,
        overflow: 'hidden',
        width: (width - 58) / 2,
        justifyContent: 'center',
        alignContent: 'center',
        height: 38,
    },
    footerRefreshBtnView: {
        borderWidth: 1,
        borderColor: '#00599D',
        alignItems: 'center',
        marginRight: 12,
    },
    footerRefreshText: {
        color: '#00599D',
        fontWeight: '700',
        fontSize: 12,
        paddingLeft: 5,
    },
    footerConfirmBtnView: {
        backgroundColor: '#00A651',
        marginLeft: 12,
    },
    footerConfirmText: {
        fontWeight: '700',
        fontSize: 12,
        color: '#fff',
        textAlign: 'center'
    },
    inquiryDateView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 2,
    },
    inquiryDateFromView: {
        backgroundColor: '#D9E4F0',
        width: 0.5 * (width - 80),
        height: 0.235 * 0.5 * (width - 80),
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    inquiryDateFromText: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 18,
        color: '#3C3B3E',
        textAlign: 'center',
    },
    inquiryDateToText: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 18,
        color: '#3C3B3E',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        maxWidth: 28,
    },
    inputItemCommonStyle: {
        fontSize: 14,
        fontWeight: '400',
    },
    bgECF1F7: {
        backgroundColor: '#ECF1F7',
    },
    bgD81E06: {
        backgroundColor: '#d81e06',
    },
    commonOrderTitleText: {
        color: '#3C3B3E',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20,
    },
    commonOrderStrongText: {
        color: '#3C3B3E',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 16,
    },
    commonOrderStrong700Text: {
        color: '#3C3B3E',
        fontSize: 11,
        fontWeight: '700',
        lineHeight: 16,
    },
    commonOrderContentText: {
        color: '#3C3B3E',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 20,
    },
    commonOrderContentFs11Text: {
        color: '#535153',
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 20,
        textTransform: 'uppercase',
    },
    commonFs11Fw500: {
        color: '#535153',
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 16,
    },
    commonFs10Fw400: {
        color: '#535153',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 16,
    },
    commonOrderAddressText: {
        color: '#3C3B3E',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 20,
        textTransform: 'capitalize',
    },
    lineHeight16: {
        lineHeight: 16,
    },
    lineHeight20: {
        lineHeight: 20,
    },
    fontWeight400: {
        fontWeight: '400',
    },
    fontWeight500: {
        fontWeight: '500',
    },
    fontWeight600: {
        fontWeight: '600',
    },
    fontWeight700: {
        fontWeight: '700',
    },
    colorFFF: {
        color: '#fff',
    },
    color262527: {
        color: '#262527',
    },
    color021501: {
        color: '#021501',
    },
    iconTextSize: {
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 14,
    },
    colorF26F07: {
        color: '#F26F07',
    },
    color00599D: {
        color: '#00599D',
    },
    color535153: {
        color: '#535153',
    },
    color9C9897: {
        color: '#9C9897',
    },
    color344054: {
        color: '#344054',
    },
    color06569F: {
        color: '#06569F',
    },
    color4D4D4D: {
        color: '#4D4D4D',
    },
    colorF7190E: {
        color: '#F7190E',
    },
    bgColorFFF: {
        backgroundColor: '#FFF',
    },
    bgColorEAF0F3: {
        backgroundColor: '#eaf0f3',
    },
    bgColor344054: {
        backgroundColor: '#344054',
    },
    bgColor666: {
        backgroundColor: '#666',
    },
    bgColorF5FAFA: {
        backgroundColor: '#F5FAFA',
    },
    bgColorF4F4F8: {
        backgroundColor: '#F4F4F8',
    },
    commonfs11fw400: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 18,
        color: '#00599D',
    },
    commonPersonalCenterTitleText: {
        color: '#262527',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        paddingLeft: 9,
    },
    wh15: {
        width: 15,
        height: 15,
    },
    wh20: {
        width: 20,
        height: 20,
    },
    wh24: {
        width: 24,
        height: 24,
    },
    wh28: {
        width: 28,
        height: 28,
    },
    wh30: {
        width: 30,
        height: 30,
    },
    wh35: {
        width: 35,
        height: 35,
    },
    wh38: {
        width: 38,
        height: 38,
    },
    wh40: {
        width: 40,
        height: 40,
    },
    wh80: {
        width: 80,
        height: 80,
    },
    wh90: {
        width: 90,
        height: 90,
    },
    wh120: {
        width: 120,
        height: 120,
    },
    wh180: {
        width: 180,
        height: 180,
    },
    wh250: {
        width: 250,
        height: 250,
    },
    loginTouchableOpacity: {
        backgroundColor: '#06569F',
        height: 52,
        borderRadius: 6,
        justifyContent: 'center',
    },
    loginTouchableOpacityText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
    alignSelfCenter: {
        alignSelf: 'center',
    },
    textDecorationLineUnderline: {
        textDecorationLine: 'underline',
    },
    borderRadius10: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    textInput: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#e2e6eb',
        borderRadius: 5,
        height: 38,
        overflow: 'hidden',
        paddingLeft: 8,
        fontSize: 14,
        color: '#333',
    },
    operationBlock: {
        zIndex: 100,
        position: 'absolute',
        top: 0.8 * (height - 160),
        right: 20,
        backgroundColor: '#efefef',
        width: 48,
        height: 48,
        alignSelf: 'center',
        borderRadius: 100,
        overflow: 'hidden',
    },
    boxWrap: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    boxText: {
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: '700',
    },
    btnBg06569F: {
        backgroundColor: '#06569F',
        borderRadius: 5,
        padding: 8,
        overflow: 'hidden',
        alignContent: 'center',
        alignItems: 'center'
    },
    btnBg0aa014: {
        backgroundColor: '#0aa014',
        borderRadius: 5,
        padding: 8,
        overflow: 'hidden',
        alignContent: 'center',
        alignItems: 'center'
    },
    btnBgD81E06: {
        backgroundColor: '#D81E06',
        borderRadius: 5,
        padding: 8,
        overflow: 'hidden',
        alignContent: 'center',
        alignItems: 'center'
    },
    btnBg999: {
        backgroundColor: '#999',
        borderRadius: 5,
        padding: 8,
        overflow: 'hidden',
        alignContent: 'center',
        alignItems: 'center'
    }

});
export default styles;
