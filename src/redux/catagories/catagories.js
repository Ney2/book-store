// ACTION
export const checkStatus = () => ({
  type: 'CHECK_STATUS',
});

// REDUCER
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoryReducer;
