
//returns an object must use () or use return
export const increment = () => {
 return {  type : 'INCREMENT'}
};

export const decrement = () => ({
    type : 'DECREMENT'
});
