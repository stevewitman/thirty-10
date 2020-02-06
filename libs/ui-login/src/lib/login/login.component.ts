import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '@nx10/core-auth';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject()

  form: FormGroup;

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['',   [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.authService.authenticate(this.form.value).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({access_token}) => {
      localStorage.setItem('token', access_token);
      this.router.navigate(['/projects']);
    })
  }

}
