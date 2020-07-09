import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  users: User[];

  constructor(private userService: UserService, private router: Router) {
    userService.getUsers().subscribe(value => {
      this.users = value;

    });
  }


  toUserdetail(user: User): void {
    this.router.navigate(['users', user.id], {state: {user}});

  }
}
