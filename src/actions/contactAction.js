import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';

export const getContacts = () => ({
  type: GET_CONTACTS
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id
});

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact
});
