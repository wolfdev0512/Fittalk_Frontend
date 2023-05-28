import { combineReducers } from "redux";
import storage from "./storage";
// slices
import tagsReducer from "./slices/tags";
import menusReducer from "./slices/menus";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  menus: menusReducer,
  tags: tagsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootPersistConfig, rootReducer };
