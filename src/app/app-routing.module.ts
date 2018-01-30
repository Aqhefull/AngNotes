import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NotePageComponent } from './note-page/note-page.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'notes', component: NotePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}