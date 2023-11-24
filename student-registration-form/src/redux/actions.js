// src/redux/actions.js
export const updateField = (fieldName, value) => ({
  type: "UPDATE_FIELD",
  payload: { fieldName, value },
});
