import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: '', cols: 2, rows: 3, color: 'lightblue'},
    {text: '', cols: 2, rows: 9, color: 'lightgreen'},
    {text: '', cols: 2, rows: 3, color: 'lightpink'},
    {text: '', cols: 2, rows: 3, color: '#DDBDF1'},
  ];

}
