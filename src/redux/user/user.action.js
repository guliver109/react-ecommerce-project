import { UserActonTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActonTypes.SET_CURRENT_USER,
    payload: user
})