import {combineReducers} from 'redux';
import Namespace from './namespace';
import {reducer as catalog} from './catalog/reducer';
import {reducer as film} from './film/reducer';
import {reducer as user} from './user/reducer';

export default combineReducers({
  [Namespace.CATALOG]: catalog,
  [Namespace.FILM]: film,
  [Namespace.USER]: user
});
