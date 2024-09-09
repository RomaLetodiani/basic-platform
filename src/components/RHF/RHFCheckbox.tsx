import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & CheckboxProps;

const RHFCheckbox = <T extends FieldValues>({ name, label, ...props }: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormControlLabel
            htmlFor={name}
            control={<Checkbox checked={value} onChange={onChange} {...props} />}
            label={label}
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    ></Controller>
  );
};

export default RHFCheckbox;
