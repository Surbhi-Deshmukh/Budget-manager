// reducers.js
import { ADD_BUDGET_ENTRY, VIEW_BUDGET_ENTRIES } from './actions';

const initialState = {
  budgetEntries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDGET_ENTRY:
      return {
        ...state,
        budgetEntries: [...state.budgetEntries, action.payload],
      };
    case VIEW_BUDGET_ENTRIES:
      return state.budgetEntries;
    default:
      return state;
  }
};

export default rootReducer;
