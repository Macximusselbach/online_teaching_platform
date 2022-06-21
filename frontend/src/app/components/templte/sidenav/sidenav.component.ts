import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PerfilHeaderComponent } from '../header/individuals-header/perfil-header/perfil-header.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: ;
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
    {text: '../', cols: 1, rows: 4, color: 'cornsilk'},
    {text: "Ola", cols: 1, rows: 4, color: 'cornsilk'},
    {text: 'Oi', cols: 1, rows: 8, color: 'cornsilk'},
    {text: 'Ova', cols: 1, rows: 4, color: 'cornsilk'},
    {text: "Ola", cols: 1, rows: 4, color: 'cornsilk'}
  ];

}
