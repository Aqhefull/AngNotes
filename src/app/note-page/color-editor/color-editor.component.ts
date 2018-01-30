import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteSerService } from '../../_services/note-ser.service';

@Component({
  selector: 'app-color-editor',
  templateUrl: './color-editor.component.html',
  styleUrls: ['./color-editor.component.sass']
})
export class ColorEditorComponent implements OnInit {
  colors = this.noteService.colors;
  @Input() defaultColor = 'red'; // какой будет дефолт цвет при создании
  @Output() choosingColor = new EventEmitter();

  constructor(private noteService: NoteSerService) { }

  ngOnInit() {
  }
  chooseColor(c) {
    this.defaultColor = c; // переопределяем дефолтный цвет выбранным
    this.choosingColor.emit(this.defaultColor);
  }

}
