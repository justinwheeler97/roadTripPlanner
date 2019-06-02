import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit {
  users: any[];
  cols: any[];
  loading: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
      this.loading = false;
    })
    this.cols = [
      { field: '_id', header: 'ID' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'email', header: 'Email' }
    ];
  }
}
