import { NoteSerService } from './../../_services/note-ser.service';
import { Component, OnInit } from '@angular/core';
import { NoteInterface } from '../../_interfaces/note';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.sass'],
})
export class NoteFormComponent implements OnInit {
  notes: NoteInterface[] = [];
  color = 'white';
  error: string;
  constructor(private notesService: NoteSerService) { }

  ngOnInit() {
  }
  addNote(noteTitle, noteDescr) {
    const newNote = {
      name: noteTitle.value,
      descr: noteDescr.value,
      color: this.color
    };
    this.notesService.addNote(newNote)
      .subscribe((note: NoteInterface) => {
        this.notesService.notes.push(note);
    },
    (error) => {
      this.error = error;
    }
  );
    noteTitle.value = '';
    noteDescr.value = '';
  }
  chooseColor( c ) {
    this.color = c;
  }
}
