import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

   users: any[];
  title = "List of Users";
  constructor(http: Http) { 
    http.get('http://localhost:8080/users/all-users').subscribe(response =>{
      this.users = response.json();
    })
  }

  ngOnInit() {
  }

  log(x){
    console.log(x);
    
  }

  submit(f){
    console.log(f);
  }

}
