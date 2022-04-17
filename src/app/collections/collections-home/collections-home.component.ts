import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: "Demmy", age: 15, job: "Designer"}, 
    {name: "Bims", age: 5, job: "Cook"}, 
    {name: "Malik", age: 20, job: "Actor"}
  ] as any; 
  headers = [
    {key: "name", label: 'Name'}, 
    {key: "age", label: 'Age'},
    {key: "job", label: 'Job'},
  ] as any; 

  constructor() { }

  ngOnInit(): void {
  }

}
