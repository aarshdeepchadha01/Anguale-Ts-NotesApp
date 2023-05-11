import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Note } from '../notes';
import { Router } from '@angular/router';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  title: string = '';
  content: string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private route: Router,
    private noteService: NoteServiceService
  ) {}

  ngOnInit() {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }

  addNote(): void {
    const id =
      this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1;
    const newNote: Note = {
      id: id,
      title: this.title,
      content: this.content,
    };

    this.noteService.addNote(newNote);
    this.title = '';
    this.content = '';

    this.cdr.detectChanges();
    this.route.navigate(['/all-notes']);
  }
  showAllNotes(): void {
    this.route.navigate(['/all-notes']);
  }
}
