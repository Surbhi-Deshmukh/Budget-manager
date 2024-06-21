// src/BudgetEntry.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudgetEntry } from './actions';
import { TextField, Button } from '@material-ui/core';



const BudgetEntry = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const handleSave = () => {
    const newItem = {
      name: itemName,
      plannedAmount: plannedAmount,
      actualAmount: actualAmount,
    };
    dispatch(addBudgetEntry(newItem));
    // Reset form fields after saving
    setItemName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <div>
      <h2>Budget Entry</h2>
      <TextField
        label="Name of the item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <TextField
        label="Planned amount"
        value={plannedAmount}
        onChange={(e) => setPlannedAmount(e.target.value)}
      />
      <TextField
        label="Actual amount"
        value={actualAmount}
        onChange={(e) => setActualAmount(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default BudgetEntry;

