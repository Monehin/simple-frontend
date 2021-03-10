export const getStoredAuthToken = () => {
  const auth = JSON.parse(window.localStorage.getItem('authToken'));
  if (!auth) return null;
  const exp = getExpirationDate(auth.jwt);
  if (isExpired(exp)) {
    removeStoredAuthToken();
  } else {
    return auth;
  }
};

export const storeAuthToken = (token) => {
  window.localStorage.setItem('authToken', JSON.stringify(token));
};

export const removeStoredAuthToken = () => {
  window.localStorage.removeItem('authToken');
};

export const getExpirationDate = (jwtToken) => {
  if (!jwtToken) {
    return null;
  }

  const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

export const isExpired = (exp) => {
  if (!exp) {
    return true;
  }

  return Date.now() > exp;
};
