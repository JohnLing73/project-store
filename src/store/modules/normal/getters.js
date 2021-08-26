export default {
    theme(state) {
        return state.colorTheme;
    },
    slideData(state) {
        return state.wrapData;
    },
    profileFigDark(state) {
        return state.profileIconDark;
    },
    profileFigLight(state) {
        return state.profileIconLight;
    },
    cartFigDark(state) {
        return state.cartIconDark;
    },
    cartFigLight(state) {
        return state.cartIconLight;
    },
    cardLists(state) {
        return state.cardData;
    },
    fontIconLists(state) {
        return state.fontIconData;
    },
    recommendLists(state) {
        return state.recommendData;
    },
    svgTheme(state) {
        if(state.colorTheme === 'dark') {
            return 'black'
        }else {
            return 'white'
        }
    }
    
}