import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent implements OnInit {

  menu: any[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadMenu();
  }

  loadMenu() {
    this.menu = this.menuService.cargarSideNav();
  }

}
