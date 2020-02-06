import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@nx10/material';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiLoginModule } from '@nx10/ui-login';
import { CoreAuthModule } from '@nx10/core-auth';
import { AuthInterceptor } from '@nx10/core-auth';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    PageNotFoundComponent
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
