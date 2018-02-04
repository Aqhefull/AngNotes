import { Component, Input, OnInit} from '@angular/core';
import { NoteSerService } from '../../_services/note-ser.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.sass'],
})
export class NoteListComponent implements OnInit {
  notes = [];
  error: string;
  constructor(private notesService: NoteSerService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
      this.notesService.getNotes()
        .subscribe((notes) => {
        this.notes = notes;
        return this.notes;
        },
        (error) => {
          this.error = error;
        });
  }

  superRemoveNote(newlist) {
    this.getNotes();
  }
}
