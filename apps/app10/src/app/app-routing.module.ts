import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from '@nx10/ui-login';
import { AuthGuard } from './auth.guard';
import { ProjectComponent } from './projects/project/project.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', canActivate: [ AuthGuard ], component: ProjectsComponent },
  { path: 'projects/:id', canActivate: [ AuthGuard ], component: ProjectComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
