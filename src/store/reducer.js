import { combineReducers } from 'redux-immutable';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { reducer as commonReducer} from '../components/store';
import { reducer as indexReducer } from '../pages/IndexBookPage/store';
import { reducer as bookReducer } from '../pages/BookPage/store';
import { reducer as personReducer } from '../pages/PersonPage/store';
import { reducer as manageReducer } from '../pages/ManagePages/store';
import { reducer as searchBookList } from '../pages/SearchBookList/store';
const rootReducer = combineReducers({
    common:commonReducer,
    index:indexReducer,
    book:bookReducer,
    person:personReducer,
    manage:manageReducer,
    searchBook:searchBookList


});

export default rootReducer;