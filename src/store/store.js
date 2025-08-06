
import counterReducer from "./reducers/counterReducer";
import { configureStore } from "@reduxjs/toolkit";

//const  store = createStore(counterReducer);

const  store = configureStore({  //It expects an object with at least one key: reducer.
    reducer:{                      // reducer -> key
       counter : counterReducer,  // counter is the slice name ,counterReducer is the function that handles the logic for that slice
    }
})

export default store;