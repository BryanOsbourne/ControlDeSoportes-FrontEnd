import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public notifications: number = 20;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  public toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

}
