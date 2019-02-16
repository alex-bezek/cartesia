import Cookies from 'js-cookie';
import uuidv1 from 'uuid/v1';
import { AUTH_COOKIE_NAME } from '../constants';

const setAuthCookie = (username) => {
  const id = uuidv1();
  const json = { id, username };
  Cookies.set(AUTH_COOKIE_NAME, JSON.stringify(json));
};

// TODO: Make a cookie object that we can instantiate and pass around
// This has fallbacks to avoid nil checks everywhere, but now we have to check
// if something like username is present which feels weird. We could use the
// null object pattern, and the class returned could have a `valid` method or something
const getAuthCookie = () => JSON.parse(Cookies.get(AUTH_COOKIE_NAME) || '{}') || {};
const getAuthCookieID = () => getAuthCookie().id;
const getAuthCookieUserName = () => getAuthCookie().username;

export {
  setAuthCookie,
  getAuthCookie,
  getAuthCookieUserName,
  getAuthCookieID,
};
