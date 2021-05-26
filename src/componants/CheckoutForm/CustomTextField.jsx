import React from "react";
import { TextField, Grid, useFormControl } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        defaultValue=""
        name={name}
        label={label}
        required
      />
    </Grid>
  );
};

export default FormInput;
