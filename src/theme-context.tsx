import React, { Component } from 'react';
/**
 * component for select button to change language
 */

export const themes = {
  en: {
    upload_button: 'upload',
    home_menu: 'home',
    lang: 'en'
  },
  ukr: {
    upload_button: 'завантажити',
    home_menu: 'домашня',
    lang: 'ukr'
  },
};

export const ThemeContext = React.createContext(
  themes.en // default value
);
