export default {
    theme(state) {
        return state.colorTheme;
    },
    //判定黑夜模式
    themeMode(_state, getters) {
        if(getters.theme === 'light') {
            return true;
        }else{
            return false;
        }
    },
    innerWidth(state) {
        return state.innerWidth;
    },
    showOnce(state) {
        return state.showOnce;
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
    },
    //link area
    toMemberPage() {
        return { name: 'member' };
    },
    toAbout() {
        return { name: 'about' };
    }
    
}