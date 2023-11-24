// // src/components/Form.js
// import React from "react";
// import TextField from "@mui/material/TextField";
// import { useSelector, useDispatch } from "react-redux";
// import { updateField } from "../redux/actions";
// import { saveFormData } from "../firebase/firebaseService";

// const Form = () => {
//   const dispatch = useDispatch();
//   const formState = useSelector((state) => state);

//   const handleChange = (fieldName, value) => {
//     dispatch(updateField(fieldName, value));
//   };

//   const handleSubmit = async () => {
//     try {
//       await saveFormData(formState);
//       alert("Form data saved successfully!");
//     } catch (error) {
//       console.error("Error saving form data:", error);
//       alert("Error saving form data. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <TextField
//         label="First Name"
//         value={formState.firstName}
//         onChange={(e) => handleChange("firstName", e.target.value)}
//       />
//       <TextField
//         label="Last Name"
//         value={formState.lastName}
//         onChange={(e) => handleChange("lastName", e.target.value)}
//       />
//       {/* Add other form fields similarly */}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Form;

// src/components/Form.js
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../redux/actions";
import { saveFormData } from "../firebase/firebaseService";

const Form = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state);

  const handleChange = (fieldName, value) => {
    dispatch(updateField(fieldName, value));
  };

  const handleSubmit = async () => {
    try {
      await saveFormData(formState);
      alert("Form data saved successfully!");
    } catch (error) {
      console.error("Error saving form data:", error);
      alert("Error saving form data. Please try again.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        width: "50%",
        border: "solid",
      }}
    >
      <h1 style={{ textAlign: "left" }}>Student Form</h1>
      {/* First Row */}
      <Box display="flex" alignItems="center" mb={2}>
        <label>Student Name:</label>
        <TextField
          placeholder="First Name"
          value={formState.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          variant="outlined"
          size="small"
          margin="dense"
        />
        <TextField
          placeholder="Last Name"
          value={formState.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          variant="outlined"
          size="small"
          margin="dense"
        />
      </Box>

      {/* Second Row */}
      <Box display="flex" alignItems="center" mb={2}>
        <label>Student ID:</label>
        <TextField
          label="Student ID"
          value={formState.studentId}
          onChange={(e) => handleChange("studentId", e.target.value)}
          variant="outlined"
          size="small"
          margin="dense"
        />
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <label>Session Year</label>
        <TextField
          label="Student ID"
          value={formState.studentId}
          onChange={(e) => handleChange("studentId", e.target.value)}
          variant="outlined"
          size="small"
          margin="dense"
        />
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <label>Joining Date</label>
        <TextField
          label="Student ID"
          value={formState.studentId}
          onChange={(e) => handleChange("studentId", e.target.value)}
          variant="outlined"
          size="small"
          margin="dense"
        />
      </Box>

      {/* Third Row */}
      <Box display="flex" alignItems="center">
        <label>Email:</label>
        <TextField
          placeholder="Email"
          value={formState.email}
          onChange={(e) => handleChange("email", e.target.value)}
          variant="outlined"
          size="small"
          margin="dense"
        />
      </Box>

      {/* Submit Button */}
      <Box mt={2}>
        <button onClick={handleSubmit}>Submit</button>
      </Box>
    </div>
  );
};

export default Form;
