import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-container',
  imports: [MatButtonModule],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

  

    readonly dialog = inject(MatDialog);
  
    openLoginDialog() {
      this.dialog.open(LoginDialogComponent);
    }
  
    openRegistrationDialog() {
      this.dialog.open(RegistrationDialogComponent);
    }
}
