import { NoteSerService } from './../../_services/note-ser.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass'],
})
export class NoteComponent implements OnInit {

  @Input() note;
  @Input() i;


  constructor(private notesService: NoteSerService) { }

  ngOnInit() {
  }
  setColor(newColor) {
    this.note.color = newColor;
    console.log(this.note);
    return this.notesService.changeNoteColor(this.note, this.note.color);
  }
  removeNote() {
    return this.notesService.removeNote(this.note);
  }


}
