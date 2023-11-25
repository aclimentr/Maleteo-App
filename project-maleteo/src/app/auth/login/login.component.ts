import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent {

userForm = new FormGroup({
    email: new FormControl<string>('',[Validators.required, Validators.email]),
    contraseña: new FormControl<string>('',[Validators.required, Validators.minLength(8)] ),
});

constructor(
    private authService: AuthService,
    private router: Router
    ) {}

save():void {
        console.log('esta entrando');

        if (this.userForm.valid) {
          let login = {
            email: this.userForm.get('email')?.value ?? '',
            contraseña: this.userForm.get('contraseña')?.value ?? '',
          };
          this.authService.login(login).subscribe((user) => {

            // console.log(user);

            localStorage.setItem('token', user.token);
            this.authService.handleLoginResponse(user.token);
            this.router.navigate(['/home']);
          });
        } else {
          console.log('form invalido');
        }


}
}
