import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../user.service';
import { CdkTableDataSourceInput } from '@angular/cdk/table';


@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],

})
export class UsersListComponent implements OnInit{
users: IUser[] = [];

constructor(private usersService: UsersService, private snackbar: MatSnackBar, private activatedRoute: ActivatedRoute)
{}


  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => this.users = data);
    
  }
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  // dataSource: CdkTableDataSourceInput<any> = this.users;
deleteUser(user: IUser) {
  if(user._id){
    this.usersService.deleteById(user._id).subscribe({
      next: response =>{

        if (response.status === 200 || response.status === 204) {

          console.log('Se ha borrado correctamente');
          this.ngOnInit();
      } else {
        console.log('Se ha producido un error');
        this.snackbar.open('Se ha producido un error, inténtalo más tarde.', 'Cerrar', {duration: 3000});
      }
    },
    error: error => {
      console.log(error);
      this.snackbar.open('Se ha producido un error, inténtalo más tarde.', 'Cerrar', {duration: 3000});
    },
  });
  }
}


}
