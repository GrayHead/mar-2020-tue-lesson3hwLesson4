import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: User;

  // constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  //   this
  //     .activatedRoute.params.subscribe(params => userService.getSingleUsers(params.id).subscribe(value => this.user = value));
  // }


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = history.state.user;
    });

  }


  // constructor(private route: Router) {
  //   console.log(route.getCurrentNavigation().extras.state.user);
  //
  // }

  ngOnInit(): void {
  }

}
