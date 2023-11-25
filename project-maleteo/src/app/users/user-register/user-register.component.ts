// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from 'src/app/auth/auth.service';
// import { IUser } from '../user.model';
// import { UsersService } from '../user.service';


// @Component({
//   selector: 'app-register',
//   templateUrl: '../user-register/user-register.component.html',
//   styleUrls: ['./user-register.component.scss']
// })
// export class RegisterComponent implements OnInit {

//   userForm = new FormGroup({
//     _id: new FormControl<string>(""),
//     email: new FormControl('', [Validators.required]),
//     contraseña: new FormControl('', [Validators.required]),
//     nombre: new FormControl('', [Validators.required]),
//     apellido: new FormControl('', [Validators.required]),
//     isGuardian: new FormControl(false),
//     date: new FormControl<Date>(new Date() ),
//     gender: new FormControl<string>("not"),
//     role: new FormControl<string>(""),
//     foto: new FormControl<string>(" "),
//   });


//   constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService,private router: Router,){}
//   isCreate: boolean = true;

//     ngOnInit(): void {
//       this.activatedRoute.params.subscribe(params => {
//         const id = params['id']
//         if (!id) return;
//         this.usersService.getUserById(id).subscribe(user => this.loaduserFrom(user));
//         // console.log(this.productForm)
//       });

//     }
//     resetForm(): void {
//       this.userForm.reset();
//     }
//     loaduserFrom(user: IUser): void {
//       this.userForm.reset({
//         _id: user._id,
//         email: user.email,
//         contraseña: user.contraseña,
//         nombre: user.nombre,
//         apellido: user.apellido,
//         isGuardian: false,
//         date: user.date,
//         gender: user.gender,
//         foto: user.foto,


//       });
//   }
//   save(): void {
//     console.log('esta entrando');

//     if (this.userForm.valid){

//       let _id=this.userForm.get('_id')?.value ?? '';
//       let email = this.userForm.get('email')?.value?? '';
//       let contraseña = this.userForm.get('contraseña')?.value?? '';
//       let nombre = this.userForm.get('nombre')?.value?? "";
//       let apellido = this.userForm.get('apellido')?.value?? '';
//       let isGuardian = this.userForm.get('isGuardian')?.value?? "false";
//       let date = this.userForm.get('date')?.value?? new Date() ;
//       let gender = this.userForm.get('gender')?.value?? '';
//       let foto = this.userForm.get('foto')?.value?? '';


//       let user: IUser ={
//         _id: _id,
//         email: email,
//         contraseña: contraseña,
//         nombre: nombre,
//         apellido: apellido,
//         date: date,
//         isGuardian: false,
//         gender: gender,
//         foto: foto,

//       }
//       let user2: IUser ={
//         // _id: _id,
//         email: email,
//         contraseña: contraseña,
//         nombre: nombre,
//         apellido: apellido,
//         date: date,
//         isGuardian: false,
//         gender: gender,
//         foto: foto,

//       }}

//     //     if (!_id){

//     //       this.usersService.createUser(user2).subscribe(userin => {this.usersService.handleLoginResponse(userin.token); console.log(userin); this.router.navigate(['/users/login'])});
//     //     }else {
//     //   this.usersService.updateUser(user).subscribe(userin => this.router.navigate(['/users', userin._id]))}
//     // } else {
//     //   console.log('form invalido')
//     // }
//   }
//   // getErrorMessage() {
//   //   if (this.email.hasError('required')) {
//   //     return 'You must enter a value';
//   //   }

//   //   return this.email.hasError('email') ? 'Not a valid email' : '';
//   // }
//   }

