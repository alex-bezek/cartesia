import Cookies from 'js-cookie';
import uuidv1 from 'uuid/v1';
import { AUTH_COOKIE_NAME } from '../constants';

const setAuthCookie = (username) => {
  const id = uuidv1();
  const json = { id, username };
  Cookies.set(AUTH_COOKIE_NAME, JSON.stringify(json));
};

const getAuthCookie = () => JSON.parse(Cookies.get(AUTH_COOKIE_NAME)) || {};
const getAuthCookieID = () => getAuthCookie().id;
const getAuthCookieUserName = () => getAuthCookie().username;

export {
  setAuthCookie,
  getAuthCookie,
  getAuthCookieUserName,
  getAuthCookieID,
};
