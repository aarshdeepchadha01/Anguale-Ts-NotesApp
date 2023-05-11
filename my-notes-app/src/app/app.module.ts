import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { GetAllNotesComponent } from './notes/get-all-notes/get-all-notes.component';
import { FormsModule } from '@angular/forms';
import { GetNoteDetailsComponent } from './notes/get-note-details/get-note-details.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    GetAllNotesComponent,
    GetNoteDetailsComponent,
    EditNoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
