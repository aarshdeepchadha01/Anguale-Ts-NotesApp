import { Injectable } from '@angular/core';
import { Note } from './notes';

@Injectable({
  providedIn: 'root',
})
export class NoteServiceService {
  private notes: Note[] = [];

  constructor() {
    this.loadNotes();
  }
  private loadNotes() {
    const data = localStorage.getItem('notes');
    if (data) {
      this.notes = JSON.parse(data);
    }
  }

  private saveNotes(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  getNotes() {
    return this.notes;
  }

  getNotesById(id: number): Note | null {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      const notes: Note[] = JSON.parse(storedNotes);
      const note = notes.find((n) => n.id === id);
      if (note) {
        return note;
      }
    }
    console.error(`Note with id ${id} not found`);
    return null;
  }

  addNote(note: Note): void {
    note.id = this.notes.length + 1;
    this.notes.push(note);
    this.saveNotes();
  }
  updateNoteById(id: number, updatedNote: Note): void {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes[index] = { ...updatedNote, id };
      this.saveNotes();
    }
  }

  deleteNote(id: number) {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }
}
