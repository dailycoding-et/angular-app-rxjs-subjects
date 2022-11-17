import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/api/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users:any[] =[];

  public selectedUserId= -1;

  constructor(private api: UsersService) { }

  public ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(){
    this.api.getUsers().subscribe((res:any)=>{
      this.users= res.users
    },error=>{
      console.log(error);
    })
  }

  public selectUser(id){
    this.selectedUserId = id;
    this.api.getUserById(id).subscribe((res:any)=>{
      this.api.userDetailsSubject.next(res.user);
    },error=>{
      console.log(error);
    })
  }

}
