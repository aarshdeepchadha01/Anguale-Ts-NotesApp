import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { GetAllNotesComponent } from './notes/get-all-notes/get-all-notes.component';
import { GetNoteDetailsComponent } from './notes/get-note-details/get-note-details.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';

const routes: Routes = [
  { path: '', component: GetAllNotesComponent },
  { path: 'add-notes', component: NotesComponent },
  { path: 'all-notes', component: GetAllNotesComponent },
  { path: 'note/:id', component: GetNoteDetailsComponent },
  { path: 'edit-note/:id', component: EditNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
