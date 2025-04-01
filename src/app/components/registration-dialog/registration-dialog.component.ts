import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-registration-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogClose, MatButtonModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './registration-dialog.component.html',
  styleUrl: './registration-dialog.component.scss'
})
export class RegistrationDialogComponent {
  private _formBuilder = inject(FormBuilder);

  constructor(private usersService: UsersService){}

  firstFormGroup = this._formBuilder.group({
    userName: ['', [Validators.minLength(3), Validators.required]],
    userPassword: ['', [Validators.minLength(5) ,Validators.required]]
  });
  secondFormGroup = this._formBuilder.group({
    userEmail: ['', [Validators.email, Validators.required]],
    userAddress: ['', Validators.required]
  });
  isLinear = false;

  getUser(): User {
    return {
      userName: this.firstFormGroup.get('userName')?.value || '',
      userPassword: this.firstFormGroup.get('userPassword')?.value || '',
      userEmail: this.secondFormGroup.get('userEmail')?.value || '',
      userAddress: this.secondFormGroup.get('userAddress')?.value || ''

    };
  }

  addUser() {
    this.usersService.addUser(this.getUser());
  }
}
