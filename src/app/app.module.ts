import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NoteSerService } from './_services/note-ser.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NotePageComponent } from './note-page/note-page.component';
import { NoteComponent } from './note-page/note/note.component';
import { NoteListComponent } from './note-page/note-list/note-list.component';
import { NoteFormComponent } from './note-page/note-form/note-form.component';
import { HoverNoteDirective } from './_directives/hover-note.directive';
import { HoverNoteColorDirective } from './_directives/hover-note-color.directive';
import { ColorEditorComponent } from './note-page/color-editor/color-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotePageComponent,
    HoverNoteDirective,
    HoverNoteColorDirective,
    NoteFormComponent,
    ColorEditorComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [NoteSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
