import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPerson } from './person.interface';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'UserList';
  userID: number;
  userName: string;
  userPassword: string;
  userMail: string;
  users: Array<IPerson> = [];
  editStatus: boolean;
  editUserName: string;
  editIndex: number;
  
  constructor() { }
  ngOnInit() {
  }

  addUser() {
    const newP: IPerson = new Person(1, this.userName, this.userPassword, this.userMail);
    if (this.users.length > 0) {
      newP.id = this.users.slice(-1)[0].id + 1;
    }
    this.users.push(newP);
    this.userName = '';
    this.userPassword = '';
    this.userMail = '';
    this.editStatus = false
  }
  delete(person: IPerson) {
    this.editStatus = false;
    const index = this.users.findIndex(p => p.id === this.userID);
    this.users.splice(index, 1);

  }
  edit(person: IPerson) {
    this.editStatus = true;
    this.userName = person.userName;
    this.userPassword = person.userPassword;
    this.userMail = person.userMail;
    this.userID = person.id;

  }

  saveEditUser() {
    const editP: IPerson = new Person(this.userID, this.userName, this.userPassword, this.userMail);
    const index = this.users.findIndex(p => p.id === this.userID);
    this.users.splice(index, 1, editP);
    this.userName = '';
    this.userPassword = '';
    this.userMail = '';
    this.editStatus = false;
  }


}




