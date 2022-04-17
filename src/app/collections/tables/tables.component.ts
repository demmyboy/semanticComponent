import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
@Input() classNames = ''; 
@Input() data = [] as any; 
@Input() headers = [] as any; 
  constructor() { }

  ngOnInit(): void {
  }

}
