import React from "react";

//define adefaultState object with userType  property which is an empty string by default
//this an initial stat that will be used in the context.
const defaultState = {
  userType: "",
  seller: {
    package_details: {},
  },
};

const GlobalContext = React.createContext(defaultState);

export { GlobalContext, defaultState };
