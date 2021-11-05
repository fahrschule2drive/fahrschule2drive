import React from 'react';

import { LanguageContextProvider } from './src/store/context/LanguageContext';

export const wrapRootElement = ({ element }) => (<LanguageContextProvider>{element}</LanguageContextProvider>);
