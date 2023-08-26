import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/core/models/agent';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sideBarOpen = true;
  panelOpenState = false;
  agentConected: Agent;
  menu: any[];

  constructor(
    private menuService: MenuService,
    private authenticationService : AuthenticationService
    ) { }

  ngOnInit() {
    this.loadMenu();
    this.userData();
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  loadMenu() {
    this.menu = this.menuService.cargarSideNav();
  }

  userData(){
    this.agentConected = this.authenticationService.getUserToken();
  }

}
