import { NoteSerService } from './../../_services/note-ser.service';
import { Component, OnInit } from '@angular/core';
import { NoteInterface } from '../../_interfaces/note';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.sass']
})
export class NoteFormComponent implements OnInit {
  form: FormGroup;

  notes: NoteInterface[] = [];
  color = 'white';
  error: string;
  constructor(private notesService: NoteSerService) {}

  ngOnInit() {
    this.form = new FormGroup({
      noteTitle: new FormControl(null, [Validators.required]),
      noteDescr: new FormControl(null, [Validators.required])
    });
  }
  addNote(noteTitle, noteDescr) {
    const newNote = {
      name: noteTitle.value,
      descr: noteDescr.value,
      color: this.color
    };
    this.notesService.addNote(newNote);
  }
  chooseColor(c) {
    this.color = c;
  }
  removeAllNotes() {
    this.notesService.removeAllNotes();
  }
  checkBtnValid(status) {
    return status;
  }
}
