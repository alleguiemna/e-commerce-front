import rootReducer from "./reducers"
import {createStore} from "redux"

const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer,devtool)
export default store