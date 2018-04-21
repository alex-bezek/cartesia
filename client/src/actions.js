export const ADD_MESSAGE = 'add-message';
export const ADD_RESPONSE = 'add-response';

export const addMessage = (message) => {
  return { type: ADD_MESSAGE, message };
}

export const addResponse = (message) => {
  return { type: ADD_RESPONSE, message };
}