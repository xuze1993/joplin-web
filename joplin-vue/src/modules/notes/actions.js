import notesApi from './api'
import types from './types'

export const actions = {
  [types.NOTE_NEW]: async ({ commit }) => {
    commit(types.NOTE_NEW)
  },

  [types.NOTE_FETCH_PAGE]: async ({ commit }, notes) => {
    commit(types.NOTE_SET_ALL, notes)
  },

  [types.NOTE_FETCH_ALL]: async ({ commit }) => {
    commit(types.NOTE_SET_ALL, await notesApi.fetchNotes())
  },

  [types.NOTE_FETCH_TAG]: async ({ commit }, tag) => {
    commit(types.NOTE_SET_ALL, await notesApi.fetchNotesByTag(tag.id))
  },

  [types.NOTE_FETCH_FOLDER]: async ({ commit }, folder) => {
    commit(types.NOTE_SET_ALL, await notesApi.fetchNotesByFolder(folder.id))
  },

  [types.NOTE_SET]: async ({ commit }, note) => {
    commit(types.NOTE_SET, note)
  },

  [types.NOTE_CREATE]: async ({ commit }, note) => {
    await notesApi.createNote(note)
    commit(types.NOTE_APPEND, note)
  },

  [types.NOTE_CHANGE]: async ({ commit }, note) => {
    await notesApi.updateNote(note)
    commit(types.NOTE_CHANGE, note)
  },

  [types.NOTE_REMOVE]: async ({ commit }, id) => {
    await notesApi.deleteNote(id)
    commit(types.NOTE_REMOVE, id)
  },

  [types.NOTETAG_SET]: async ({ commit }, note) => {
    commit(types.NOTETAG_SET, await notesApi.fetchNoteTags(note))
  }
}

export default actions
