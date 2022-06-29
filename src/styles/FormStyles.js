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
    color: "var(--main-color)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--main-color)",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "var(--main-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--main-color)",
    },
  },
});
