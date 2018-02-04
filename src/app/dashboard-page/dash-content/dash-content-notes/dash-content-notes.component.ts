import { NoteSerService } from './../../../_services/note-ser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-content-notes',
  templateUrl: './dash-content-notes.component.html',
  styleUrls: ['./dash-content-notes.component.sass']
})
export class DashContentNotesComponent implements OnInit {
  numberOfNotes;
  constructor(private notesService: NoteSerService) {}

  ngOnInit() {
    this.getNotesNumber();
  }
  getNotesNumber() {
    this.notesService.getNotes();
        // .subscribe((notes) => {
        //   this.notesService.notes = notes;
        //   this.numberOfNotes = this.notesService.notes.length;
        //   return this.numberOfNotes;
        // });
  }
}
