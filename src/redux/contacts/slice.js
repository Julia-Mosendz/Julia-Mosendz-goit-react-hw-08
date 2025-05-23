import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    flushContacts: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const deleteId = state.items.findIndex((item) => {
          return item.id === action.payload.id;
        });
        state.items.splice(deleteId, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const { flushContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
