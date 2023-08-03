import axios from "axios";

const BASE_URL = "http://localhost:8080/api/notes";

export const getActiveNotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/active`);
    return response;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getArchivedNotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/archived`);
    return response;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const saveNote = async (note) => {
  try {
    const response = await axios.post(BASE_URL, note);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const updateNote = async (id, note) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, note);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const deleteNote = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const archiveNote = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/archive/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const unarchiveNote = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/unarchive/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
