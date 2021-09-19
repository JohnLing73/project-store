export default {
    switchTheme(state) {
        if(state.colorTheme === 'dark') {
            state.colorTheme = 'light';
        }else{
            state.colorTheme = 'dark';
        }
    },
    toggleList(state, payload) {
        const list = payload.list;
        if(!state.toggleListValue && payload.evt.target.id === 'toggleIcon'){
          list.opacity = 1;
          list.zIndex = 5;
          list.transform = 'translate(-3rem,7px)';
        }else {
          list.opacity = 0;
          list.zIndex = -5;
          list.transform = 'translate(-3rem,-3rem)';
        }
        state.toggleListValue = !state.toggleListValue;
    }
}
