import { Add, Remove, Restore } from "@mui/icons-material";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
  reset,
} from "./counterSlice";

export default function Counter() {
  const [number, setNumber] = React.useState(0);
  const state = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const isNum = Number(number) || 0;
  const focusRef = React.useRef().current;

  return (
    <Box sx={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <Typography variant="h2" align="center">
        {state}
      </Typography>
      <TextField
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        ref={focusRef}
        variant="filled"
        label="Add Value"
      />

      <ButtonGroup sx={{ mt: 4 }}>
        <Button
          onClick={() => dispatch(increment())}
          disableElevation
          variant="contained"
          startIcon={<Add />}
        >
          Increment
        </Button>
        <Button
          onClick={() => dispatch(decrement())}
          disableElevation
          variant="contained"
          startIcon={<Remove />}
        >
          Decrement
        </Button>
        <Button
          onClick={() => dispatch(reset())}
          disableElevation
          variant="contained"
          startIcon={<Restore />}
        >
          Reset
        </Button>
      </ButtonGroup>
      <ButtonGroup sx={{ mt: 4 }}>
        <Button
          onClick={() => dispatch(incrementByValue(isNum))}
          disableElevation
          variant="contained"
          startIcon={<Add />}
        >
          Add by {isNum}
        </Button>
        <Button
          onClick={() => dispatch(decrementByValue(isNum))}
          disableElevation
          variant="contained"
          startIcon={<Remove />}
        >
          Decrement by {isNum}
        </Button>
      </ButtonGroup>
    </Box>
  );
}
