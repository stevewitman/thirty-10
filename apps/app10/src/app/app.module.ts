import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@nx10/material';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiLoginModule } from '@nx10/ui-login';
import { CoreAuthModule } from '@nx10/core-auth';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    ProjectsListComponent,
    ProjectDetailComponent,
    ProjectComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreAuthModule,
    HttpClientModule,
    MaterialModule,
    UiLoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
