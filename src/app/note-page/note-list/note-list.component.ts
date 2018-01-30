import { Component, Input, OnInit} from '@angular/core';
import { NoteSerService } from '../../_services/note-ser.service';
import { NoteInterface } from '../../_interfaces/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.sass'],
})
export class NoteListComponent implements OnInit {
  notes: NoteInterface[] = [];
  error: string;
  constructor(private notesService: NoteSerService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
      this.notesService.getNotes()
        .subscribe((notes: NoteInterface[]) => {
          this.notesService.notes = notes;
          this.notes = this.notesService.notes;
          return this.notes;
        },
        (error) => {
          this.error = error;
        });
  }

  superRemoveNote(newlist) {
    this.notes = this.notes.filter(n => n.id !== newlist.id);
    this.getNotes();
  }
}
