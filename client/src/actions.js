export const ADD_MESSAGE = 'add-message';
export const ADD_RESPONSE = 'add-response';

export const addMessage = message => ({ type: ADD_MESSAGE, message });

export const addResponse = message => ({ type: ADD_RESPONSE, message });

