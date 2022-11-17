import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/api/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userDetails;

  constructor(private api: UsersService) { }

  ngOnInit(): void {
    this.api.userDetailsSubject.subscribe(value=>{
      this.userDetails= value;
    })
  }

}
