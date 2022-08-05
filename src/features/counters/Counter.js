import React from "react";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { Box } from "@mui/system";

export default function Counter() {
  const counter = useSelector((state) => state.counter.count);
  const [incrementAmount, setincrementAmount] = React.useState("");
  const dispatch = useDispatch();
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setincrementAmount(0);
    dispatch(reset());
  };
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h3">{counter}</Typography>
        <Box sx={{ display: "flex" }}>
          <IconButton onClick={() => dispatch(increment())}>
            <AddOutlined />
          </IconButton>
          <IconButton onClick={() => dispatch(decrement())}>
            <RemoveOutlined />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <TextField
          variant="filled"
          label="Set amount"
          value={incrementAmount}
          onChange={(e) => setincrementAmount(e.target.value)}
        />
        <Button
          onClick={() => dispatch(incrementByAmount(addValue))}
          sx={{ m: 1 }}
          disableElevation
          variant="contained"
        >
          Add amount
        </Button>{" "}
        <Button onClick={resetAll} disableElevation variant="outlined">
          Reset Count
        </Button>
      </Box>
    </React.Fragment>
  );
}
