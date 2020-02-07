import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

	constructor(private snackBar: MatSnackBar) { }
	
	notification(message: string) {
		this.snackBar.open(message, 'X', {duration: 2500});
	}
}
