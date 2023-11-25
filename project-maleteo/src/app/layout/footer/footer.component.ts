import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  isUser = false;
  username = '';
 constructor(private router: Router, public authService: AuthService){}
  ngOnInit(): void {

    this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
    this.authService.isAdmin.subscribe(admin => this.isAdmin = admin);
    this.authService.isUser.subscribe(user => this.isUser = user);
    this.authService.currentUserName.subscribe(currentUserName => this.username = currentUserName);
  }
  // navigateToLogin(): void { this.router.navigate(['/reservar']); }

}
