import {Component, Input, OnInit} from '@angular/core';
import {User} from './model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'users-project';

  @Input()
  filterValue: string;

  @Input()
  filterParameter: string;

  users: User[] = [
    {
      firsName: 'Vasya',
      lastName: 'Pupkin',
      age: 20,
      city: 'Berlin'
    },
    {
      firsName: 'John',
      lastName: 'Connor',
      age: 35,
      city: 'Los Angeles'
    }
    ,
    {
      firsName: 'Wilhelm',
      lastName: 'Connor',
      age: 35,
      city: 'Los Angeles'
    }
    ,
    {
      firsName: 'John',
      lastName: 'Connor',
      age: 23,
      city: 'Los Angeles'
    }
  ];
  @Input()
  path: string;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.filterValue = params.value;
      this.filterParameter = params.parameter;
      console.log(this.filterParameter);
    });
  }

  filter(filterParameter: string , filterValue: any ): User[] {
    const filteredUsers: User[] = [];
    if (filterParameter === 'first-name'){
      console.log('name filter');
      this.users.forEach(user => {
      if (user.firsName === filterValue) {
        filteredUsers.push(user);
      }
    });
      return filteredUsers;
    }else if (filterParameter === 'age'){
      this.users.forEach(user => {
        if (user.age == filterValue) {
          filteredUsers.push(user);
        }
      });
      return filteredUsers;
    }else {
      this.users.forEach(user => {
        if (user.city === filterValue) {
          filteredUsers.push(user);
        }
      });
      return filteredUsers;
    }

  }

}
