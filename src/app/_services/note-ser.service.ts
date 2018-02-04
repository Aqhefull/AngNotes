import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import { NoteInterface } from '../_interfaces/note';
import {AngularFireDatabase} from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase';

@Injectable()
export class NoteSerService {
  notes = [];
  numberOfNotes: number;
  NoteInterface: NoteInterface[] = [];
  colors = ['white', 'red', 'green', 'blue', 'orange'];
  constructor(private http: Http, private db: AngularFireDatabase) {}

  getNotes() {
    return this.db.list<NoteInterface>('notes').valueChanges()
      .catch((error: Response) => {
        return Observable.throw('Sorry, but server is not available');
      });
  }
  getNumberOfNotes() {
    return this.db.list('notes').snapshotChanges();
  }

  addNote(note) {
    this.db.list('notes').snapshotChanges().subscribe();
    const sendNote = this.db.list('notes').push(note);
    sendNote.set({
      name: note.name,
      descr: note.descr,
      color: note.color,
      id: sendNote.key
    });
  }
  changeNoteColor(note, color) {
    note.color = color;
    this.db.list('notes').snapshotChanges().subscribe();
    this.db.list('notes').set(note.id, note);
  }
  removeNote(note) {
    this.db.list('notes').snapshotChanges().subscribe();
    this.db.list('notes').remove(note.id);
  }
  removeAllNotes() {
    this.db.list('notes').snapshotChanges().subscribe();
    this.db.list('notes').remove();
  }
}
