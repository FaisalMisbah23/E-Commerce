// import { createStore} from "redux";
// // import {configureStore} from "@reduxjs/toolkit";
// import reducers from "./reducers/index";

// const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers/index";

// const store = configureStore({
//   reducer: reducers,
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store;

import { createStore } from "redux";


import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
