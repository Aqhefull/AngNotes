import { NgModule } from '@angular/core';
import { NotePageComponent } from './note-page/note-page.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: NotePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
