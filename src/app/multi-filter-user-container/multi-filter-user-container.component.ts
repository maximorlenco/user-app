import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-multi-filter-user-container',
  templateUrl: './multi-filter-user-container.component.html',
  styleUrls: ['./multi-filter-user-container.component.css']
})
export class MultiFilterUserContainerComponent implements OnInit {

  @Input()
  firstParameter: string;

  @Input()
  lastParameter: string;

  @Input()
  firstValue: any;

  @Input()
  lastValue: any;

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.firstValue = params.firstValue;
      this.firstParameter = params.firstParam;
      this.lastValue = params.lastValue;
      this.lastParameter = params.lastParam;

    });
  }

  filter(firstParameter: string, firstValue: any, lastParameter: string, lastValue: any): User[] {
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      if (user[firstParameter] === firstValue && user[lastParameter] === Number(lastValue)) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;

  }
}
