const darkTheme = {
    accent: '#FFC700',
    main: '#fff',
    bgd: '#222527',
    modalBgd: 'rgb(239 236 236 / 90%)',
    btnText: '#060803', 
};

const lightTheme = {
    accent: '#4B526A',
    main: '#15141D',
    bgd: '#EBEBEB',
    modalBgd: 'rgb(21 20 29 / 90%)',
    btnText: '#fff',
}

let currentTheme = 'dark';

const element = document.documentElement;

function switchTheme () {
    const aboutMeContainer = document.querySelector('.about');
    const factsContainer = document.querySelector('.codex');

    if (currentTheme === 'dark') {
        element.style.setProperty('--theme-accent', lightTheme.accent);
        element.style.setProperty('--theme-main', lightTheme.main);
        element.style.setProperty('--theme-bgd', lightTheme.bgd);
        element.style.setProperty('--theme-modal-bgd', lightTheme.modalBgd);
        element.style.setProperty('--theme-btn-text', lightTheme.btnText);

        aboutMeContainer.classList.add('about--light');
        factsContainer.classList.add('codex--light');

        currentTheme = 'light';
    } else {
        element.style.setProperty('--theme-accent', darkTheme.accent);
        element.style.setProperty('--theme-main', darkTheme.main);
        element.style.setProperty('--theme-bgd', darkTheme.bgd);
        element.style.setProperty('--theme-modal-bgd', darkTheme.modalBgd);
        element.style.setProperty('--theme-btn-text', darkTheme.btnText);

        aboutMeContainer.classList.remove('about--light');
        factsContainer.classList.remove('codex--light');

        currentTheme = 'dark';
    }
}

const themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', switchTheme);