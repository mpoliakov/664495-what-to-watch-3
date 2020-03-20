import NameSpace from '../namespace';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
