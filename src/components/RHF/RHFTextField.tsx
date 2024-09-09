import { ReactNode } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import TextField, { type TextFieldProps } from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: ReactNode;
  customLabel?: ReactNode;
} & TextFieldProps;

const RHFTextField = <T extends FieldValues>({ name, label, customLabel, ...props }: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          {!label && customLabel ? customLabel : null}
          {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
          <TextField {...field} {...props} error={!!error} helperText={error?.message} />
        </Box>
      )}
    />
  );
};

export default RHFTextField;
