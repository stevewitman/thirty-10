import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@nx10/material';
import { CoreAuthModule } from '@nx10/core-auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@nx10/core-auth';

@NgModule({
  imports: [
    CoreAuthModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class UiLoginModule {}
