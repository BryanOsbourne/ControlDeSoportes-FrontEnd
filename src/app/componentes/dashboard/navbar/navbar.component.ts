import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/authentication/authentication-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private authenticationService: AuthenticationServiceService,
    private router: Router,) { }

  ngOnInit(): void {
   
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }


  cerrarSesion(){
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

}
