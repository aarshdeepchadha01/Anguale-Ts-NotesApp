import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteServiceService } from 'src/app/note-service.service';
import { Note } from 'src/app/notes';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})
export class EditNoteComponent implements OnInit {
  note: Note = {
    id: 0,
    title: '',
    content: ''
  };
  constructor(
    private noteService: NoteServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const parsedId = +id;
      this.note = this.noteService.getNotesById(parsedId) || this.note;
    }
  }

  onSubmit(): void {
    this.noteService.updateNoteById(this.note.id, this.note);
    this.router.navigate(['/all-notes']);
  }

}
