import { AppRoutingModule } from './app-routing.module';
import { NoteSerService } from './_services/note-ser.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NotePageComponent } from './note-page/note-page.component';
import { NoteComponent } from './note-page/note/note.component';
import { NoteListComponent } from './note-page/note-list/note-list.component';
import { NoteFormComponent } from './note-page/note-form/note-form.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HoverNoteDirective } from './_directives/hover-note.directive';
import { HoverNoteColorDirective } from './_directives/hover-note-color.directive';
import { ColorEditorComponent } from './note-page/color-editor/color-editor.component';
import { AccSidebarComponent } from './dashboard-page/acc-sidebar/acc-sidebar.component';
import { DashContentComponent } from './dashboard-page/dash-content/dash-content.component';
import { DashContentNotesComponent } from './dashboard-page/dash-content/dash-content-notes/dash-content-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotePageComponent,
    DashboardPageComponent,
    HoverNoteDirective,
    HoverNoteColorDirective,
    NoteFormComponent,
    ColorEditorComponent,
    NoteListComponent,
    AccSidebarComponent,
    DashContentComponent,
    DashContentNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NoteSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
