// Navigation.js
import React, { useState } from 'react';
import BudgetEntry from './BudgetEntry';
import BudgetEntryListing from './BudgetEntryListing';

const Navigation = () => {
  const [showBudgetEntry, setShowBudgetEntry] = useState(true);

  return (
    <div>
      <button onClick={() => setShowBudgetEntry(true)}>Budget Entry</button>
      <button onClick={() => setShowBudgetEntry(false)}>Budget Entry Listing</button>
      {showBudgetEntry ? <BudgetEntry /> : <BudgetEntryListing />}
    </div>
  );
};

export default Navigation;
