import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickers = () => {
  const [value, setValue] = React.useState(dayjs("2023-01-03"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} sx={{ marginTop: 1, width: "100%" }}>
        <DatePicker
          disableFuture
          label='Responsive'
          openTo='year'
          views={["year", "month", "day"]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DatePickers;
