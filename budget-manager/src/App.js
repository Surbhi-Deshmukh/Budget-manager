import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BudgetEntry from './BudgetEntry';
import BudgetEntryListing from './BudgetEntryListing';

const App = () => {
  const [showEntryScreen, setShowEntryScreen] = useState(true);

  const handleShowEntryScreen = () => {
    setShowEntryScreen(true);
  };

  const handleShowListingScreen = () => {
    setShowEntryScreen(false);
  };

  return (
    <Provider store={store}>
      <div>
        {showEntryScreen ? (
          <div>
            <BudgetEntry />
            <button onClick={handleShowListingScreen}>Show Items</button>
          </div>
        ) : (
          <div>
            <BudgetEntryListing />
            <button onClick={handleShowEntryScreen}>Back to Budget Entry</button>
          </div>
        )}
      </div>
    </Provider>
  );
};

export default App;
