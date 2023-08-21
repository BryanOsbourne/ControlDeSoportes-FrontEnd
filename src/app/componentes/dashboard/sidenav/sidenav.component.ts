import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sideBarOpen = true;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {

  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
