export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case "addNote":
      return [...state, { ...action.payload }];
    case "removeNote":
      return state.filter((note) => note.id !== action.payload);
    case "updateNote":
      return state.map((n) => {
        if (n.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return n;
      });
    case "archiveNote":
      return state.map((n) => {
        if (n.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return n;
      });
    case "unarchiveNote":
      return state.map((n) => {
        if (n.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return n;
      });
    case "loadingActiveNotes":
      return action.payload;
    case "loadingArchiveNotes":
      return action.payload;
    default:
      return state;
  }
};
