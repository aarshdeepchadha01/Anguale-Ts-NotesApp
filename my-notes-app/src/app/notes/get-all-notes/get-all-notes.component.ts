import { Component } from '@angular/core';
import { NoteServiceService } from 'src/app/note-service.service';
import { Note } from 'src/app/notes';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.css'],
})
export class GetAllNotesComponent {
  notes: Note[] = [];
  constructor(private noteService: NoteServiceService) {}
  ngOnInit() {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
      console.log('notes:', this.notes);
    }
  }

  getNotes(): Note[] {
    return this.notes;
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
    // const index = this.notes.findIndex((note) => note.id === id);
    // if (index !== -1) {
    //   this.notes.splice(index, 1);
    //   localStorage.setItem('notes', JSON.stringify(this.notes));
    // }
  }
}
