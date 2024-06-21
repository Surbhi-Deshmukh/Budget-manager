// src/BudgetEntryListing.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';



const BudgetEntryListing = () => {
  const budgetEntries = useSelector((state) => state.budgetEntries);

  return (
    <div>
      <Typography variant="h4">Budget Entry Listing</Typography>
      <List>
        {budgetEntries.map((entry, index) => (
          <ListItem key={index}>
            <ListItemText primary={entry.name} />
            <ListItemText primary={`Planned: $${entry.plannedAmount}`} />
            <ListItemText primary={`Actual: $${entry.actualAmount}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BudgetEntryListing;
