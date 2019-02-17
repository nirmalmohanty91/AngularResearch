import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

//@Component internally uses @Injectable decorator
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 users: any[];
  title = "List of Users";
  constructor(http: Http) { 
    http.get('http://localhost:8080/users/all-users').subscribe(response =>{
      this.users = response.json();
    })
  }

  ngOnInit() {
  }

  onSave(){
console.log("Button clicked.");
  }




}
