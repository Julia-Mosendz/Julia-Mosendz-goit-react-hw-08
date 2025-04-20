import { createSelector } from "@reduxjs/toolkit"

export const selectContacts = (state) => {
    return state.contacts.items
}

export const selectNameFilter = (state) => {
    return state.filters.name
}

export const selectLoading = (state) => {
  return state.contacts.loading;
};

export const selectError = (state) => {
  return state.contacts.error;
};

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, searchName) => {
    return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(searchName)
    })
})