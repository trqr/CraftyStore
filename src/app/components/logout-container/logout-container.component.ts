import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-container',
  imports: [MatButtonModule],
  templateUrl: './logout-container.component.html',
  styleUrl: './logout-container.component.scss'
})
export class LogoutContainerComponent {
  constructor(
    private Authservice: AuthService,
    private router: Router
  ){}

  logOut(){
    this.Authservice.logout();
  }

    goToAccount(){
      this.router.navigateByUrl('account');
    }

}
