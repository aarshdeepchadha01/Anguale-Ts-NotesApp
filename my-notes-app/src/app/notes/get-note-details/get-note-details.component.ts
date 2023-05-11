import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteServiceService } from 'src/app/note-service.service';
import { Note } from 'src/app/notes';

@Component({
  selector: 'app-get-note-details',
  templateUrl: './get-note-details.component.html',
  styleUrls: ['./get-note-details.component.css'],
})
export class GetNoteDetailsComponent implements OnInit {
  note: Note | null = null;

  constructor(
    private route: ActivatedRoute,
    private navigateRoute: Router,
    private noteService: NoteServiceService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.note = this.getNoteById(Number(id));
      if (this.note === null) {
        console.log(`Note with id ${id} not found`);
        // display error message or redirect to notes list page
      }
    }
  }

  getNoteById(id: number): Note | null {
    let note = this.noteService.getNotesById(id);
    if (note == null) {
      console.error(`Note with id ${id} not found`);
    }
    return note;
  }

  showAllNotes(): void {
    this.navigateRoute.navigate(['/all-notes']);
  }

  editNote() {
    if (this.note?.id) {
      this.navigateRoute.navigate(['edit-note', this.note.id]);
    }
  }
}
