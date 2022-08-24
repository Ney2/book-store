// ACTION
const CHECK_STATUS = 'bookstore/catagories/CHECK_STATUS';
const catagory = 'Under Construction';
// ACTION CREATORS
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// REDUCER
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return catagory;
    default:
      return state;
  }
};

export default categoryReducer;
