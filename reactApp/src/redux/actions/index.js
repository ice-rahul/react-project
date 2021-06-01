import * as ACTIONS from '../constants/actionTypes';

export const setAuthUser = authUser => ({
  type: ACTIONS.SET_AUTH_USER,
  authUser,
});
