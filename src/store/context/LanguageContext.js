import React, { createContext, useReducer } from 'react';

import { SET_LANGUAGE } from '../actions';

export const LanguageContext = createContext({});

const initialState = {
  language: 'de',
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload.language,
      };
    }
    default: {
      return state;
    }
  }
};

export const LanguageContextProvider = ({
  children
}) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <LanguageContext.Provider
      value={{ store, dispatch }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
