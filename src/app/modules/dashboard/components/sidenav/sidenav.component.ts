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

  public sideBarOpen = true;
  public panelOpenState = false;
  public agentConected: Agent;
  public menu: any[];

  constructor(
    private menuService: MenuService,
    private authenticationService : AuthenticationService
    ) { }

  public ngOnInit() {
    this.loadMenu();
    this.userData();
  }

  public sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  private loadMenu() {
    this.menu = this.menuService.cargarSideNav();
  }

  private userData(){
    this.agentConected = this.authenticationService.getUserToken();
  }

}
