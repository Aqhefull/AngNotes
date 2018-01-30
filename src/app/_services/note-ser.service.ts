import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NoteSerService {
  notes = [];
  colors = ['white', 'red', 'green', 'blue', 'orange'];
  constructor(private http: Http) { }

 getNotes() {
   return this.http.get('http://localhost:3000/notes')
    .map((response: Response) => {
      return response.json();
    })
    .catch((error: Response) => {
      return Observable.throw('Sorry, but server is not available');
    });
 }
  addNote(note) {
    return this.http.post('http://localhost:3000/notes', note)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: Response) => {
        return Observable.throw('Sorry, but server is not available');
      });
  }
  changeNoteColor(note, color) {
    note.color = color;
    return this.http.put(`http://localhost:3000/notes/${note.id}`, note)
      .map((response: Response) => {
        return response.json();
      })
      .catch ((error: Response) => {
      return Observable.throw('Sorry, but server is not available');
    });
}
  removeNote(note) {
    // this.notes.splice(i, 1);
    return this.http.delete(`http://localhost:3000/notes/${note.id}`)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: Response) => {
        return Observable.throw('Sorry, but server is not available');
      });
  }
}
