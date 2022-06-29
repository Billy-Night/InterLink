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
    color: "var(--menu-and-buttons-color)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--menu-and-buttons-color)",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "var(--menu-and-buttons-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--menu-and-buttons-color)",
    },
  },
});
