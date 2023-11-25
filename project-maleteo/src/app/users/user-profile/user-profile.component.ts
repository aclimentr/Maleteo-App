import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { IUser } from '../user.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  isUser = false;
  username = '';
  userProfile: IUser | undefined;
  muestra = false;

  userForm = new FormGroup({
    _id: new FormControl<string>(''),
    username: new FormControl<string>('', [

      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    nombre: new FormControl<string>(''),
    apellido: new FormControl<string>(''),
    gender: new FormControl<string>(''),
    foto: new FormControl<string>('')
  });

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}


  toggleMuestra(): void {
    this.muestra = !this.muestra;
  }
  muestrea(): void {
    this.toggleMuestra();
  }

  getUserPhotoUrl(): string {
    return this.userForm.get('foto')?.value || this.userProfile?.foto || '';
  }

  ngOnInit(): void {

    // console.log(this.authService.getId());

      let id = this.authService.getId();
      // let id = this.activatedRoute.snapshot.params['id'];


    this.authService.isLoggedIn.subscribe(
      (loggedIn) => (this.isLoggedIn = loggedIn)
    );
    this.authService.isAdmin.subscribe((admin) => (this.isAdmin = admin));
    this.authService.isUser.subscribe((user) => (this.isUser = user));




    this.authService.findCurrentUser(id).subscribe((data) => {

      this.userProfile = data;
      // console.log(data);

      this.userForm.reset({
        _id: this.userProfile._id,
        email: this.userProfile.email,
        nombre: this.userProfile.nombre,
        apellido: this.userProfile.apellido,
        foto: this.userProfile.foto
      });
    });
  }

  save(): void {
    let id = this.userForm.get('_id')?.value ?? '';
    let email = this.userForm.get('email')?.value ?? '';
    let nombre = this.userForm.get('nombre')?.value ?? '';
    let apellido = this.userForm.get('apellido')?.value ?? '';
    let foto = this.userForm.get('foto')?.value ?? '';

    let user: IUser = {
      _id: id,
      email: email,
      nombre: nombre,
      apellido: apellido,
      foto: foto
    };
    // console.log(user);

    this.usersService
      .updateUser(user)
      .subscribe((data) => console.log('usuario actualizado'));
  }
}
