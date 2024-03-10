const fontSizeSelector = ".settings__font-size";
const applyButtonSelector = ".settings__apply-button";
const formSelector = ".settings__form";
const settingsCloseSelector = ".settings__close";
const contentSettingsSelector = ".content__settings";
const settingsSelector = ".settings";
const colorInputSelector = ".settings__font-color";
const settingsIntervalSelector = ".settings__interval";
const settingsBackColorSelector = '.settings__back-color';
const settingsFontChangerSelector = '.settings__font-change';

const rootElement = document.querySelector(':root');
const textElements = rootElement.querySelectorAll('.text');
const fontSize = document.querySelector(fontSizeSelector);
const applyButton = document.querySelector(applyButtonSelector);
const form = document.querySelector(formSelector);
const settingsCloseBtn = document.querySelector(settingsCloseSelector);
const contentSetting = document.querySelector(contentSettingsSelector);
const settingsElement = document.querySelector(settingsSelector);
const colorInput = document.querySelector(colorInputSelector);
const settingsIntervalInput = document.querySelector(settingsIntervalSelector);
const settingsBackColorInputs = document.querySelectorAll(settingsBackColorSelector);
const fontChangeSelect = document.querySelector(settingsFontChangerSelector);


form.addEventListener('change', (event) => {
    event.preventDefault();
    rootElement.style.fontFamily = `'${fontChangeSelect.value}', sans-serif`;
    rootElement.style.fontSize = `${fontSize.value}px`;
    rootElement.style.color = colorInput.value;
    settingsBackColorInputs.forEach((item) => {
        if (item.checked) {
            rootElement.style.backgroundColor = item.value;
        }
    })
    textElements.forEach((item) => {
        item.style.lineHeight = settingsIntervalInput.value;
    });

});

settingsCloseBtn.addEventListener('click', () => {
    if (contentSetting.classList.contains('content__settings_hide')) {
        contentSetting.classList.remove('content__settings_hide');
        settingsCloseBtn.classList.remove('settings__close_reverse');
        settingsElement.classList.remove('settings_hide');
    } else {
        contentSetting.classList.add('content__settings_hide');
        settingsElement.classList.add('settings_hide');
        settingsCloseBtn.classList.add('settings__close_reverse');
    }
});