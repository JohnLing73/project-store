export default {
    switchTheme(state) {
        if(state.colorTheme === 'dark') {
            state.colorTheme = 'light';
        }else{
            state.colorTheme = 'dark';
        }
    },
    toggleList(state, payload) {
        const list = document.querySelector('#accountToggleList');
        if(payload) {
            if(!state.toggleListValue) {
              list.style.opacity = 1;
              list.style.zIndex = 7;
              list.style.transform = 'translate(-3rem,7px)';
        }else {
            list.style.opacity = 0;
            list.style.zIndex = -5;
            list.style.transform = 'translate(-3rem,-3rem)';
        }
            state.toggleListValue = !state.toggleListValue;
        }else {
            list.style.opacity = 0;
            list.style.zIndex = -5;
            list.style.transform = 'translate(-3rem,-3rem)';
            state.toggleListValue = false;
        }
    }
}
