// src/redux/reducers.js
const initialState = {
  firstName: "",
  lastName: "",
  studentId: "",
  sectionYear: "",
  joiningDate: "",
  email: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.payload.fieldName]: action.payload.value };
    default:
      return state;
  }
};

export default formReducer;
