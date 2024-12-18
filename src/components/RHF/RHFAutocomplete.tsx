import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import { Option } from "@/types";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
};

const RHFAutocomplete = <T extends FieldValues>({ name, options, label }: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          options={options || []}
          value={value.map((id: string) => options?.find((item) => item.id === id))}
          getOptionLabel={(option) => options?.find((item) => item.id === option.id)?.label ?? ""}
          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}
          forcePopupIcon={false}
          disableCloseOnSelect
          filterSelectedOptions
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
              label={label}
            />
          )}
          renderOption={({ id, key, ...props }, option, { selected }) => {
            return (
              <Box component="li" key={`${id}-${key}`} {...props}>
                <Checkbox checked={selected} />
                {option.label}
              </Box>
            );
          }}
        />
      )}
    />
  );
};

export default RHFAutocomplete;
