const initialState = {count : 0}; //intial state , Redux needs a starting point for your application's data.

const counterReducer = (state = initialState , action) => {

    switch (action.type) {
        case 'INCREMENT' : 
              return {count : state.count + 1};          

        case 'DECREMENT' :
            return {count : state.count - 1}
            
        default:
            return state;
    }
};
export default counterReducer;