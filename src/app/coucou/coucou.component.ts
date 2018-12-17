import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coucou',
  templateUrl: './coucou.component.html',
  styleUrls: ['./coucou.component.scss']
})
export class CoucouComponent implements OnInit {

  tableau:[];
  obj:any;

  constructor() {
    this.tableau = [];

    this.tableau[{
      name:"toto",
      age:26
    }];

    this.tableau.push({
      age: 10,
      name: "toto",
    })
    /*this.tableau = ['coucou', 'salut'];
    this.tableau.push("coucou");
    this.tableau.push("salut");
    this.obj = {
      name:"toto",
      age: 26
    };*/
  }

  ngOnInit() {
  }

  coucou() {
    alert("coucou");
  }

  alert(msg) {
    this.msg = msg;
    alert(msg);
  }

  append() {
    this.tableau.push(this.addValue);
    this.addValue = "";
  }

  append2(str) {
    this.tableau.push(str);
  }

}
