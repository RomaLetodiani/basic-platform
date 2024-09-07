import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import TextField, { type TextFieldProps } from "@mui/material/TextField";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & TextFieldProps;

const RHFTextField = <T extends FieldValues>({ name, ...props }: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} {...props} error={!!error} helperText={error?.message} />
      )}
    />
  );
};

export default RHFTextField;
