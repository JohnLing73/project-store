export default {
    switchTheme(state) {
        if(state.colorTheme === 'dark') {
            state.colorTheme = 'light';
        }else{
            state.colorTheme = 'dark';
        }
    }
}
