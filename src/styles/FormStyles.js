import { styled, TextField } from "@mui/material";

export const ApsideForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2rem",
});

export const ApsideInputField = styled(TextField)({
  width: "min(40vw, 40rem)",
  "& label.Mui-focused": {
    color: "#265184",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#265184",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#265184",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#265184",
    },
  },
});
