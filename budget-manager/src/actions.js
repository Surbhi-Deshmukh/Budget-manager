// actions.js
export const ADD_BUDGET_ENTRY = 'ADD_BUDGET_ENTRY';
export const VIEW_BUDGET_ENTRIES = 'VIEW_BUDGET_ENTRIES';

export const addBudgetEntry = (item) => ({
  type: ADD_BUDGET_ENTRY,
  payload: item,
});

export const viewBudgetEntries = () => ({
  type: VIEW_BUDGET_ENTRIES,
});
