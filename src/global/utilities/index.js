//General-purpose functions

//Create a random ID that is always unique
export const generateID = () => '_' + Math.random().toString(36).substr(2,9);