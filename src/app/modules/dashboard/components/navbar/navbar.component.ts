import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DialogsService } from 'src/app/services/dialogs/dialogs.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  notifications: number = 20;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private dialogService: DialogsService
  ) { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  logout() {
    this.dialogService.confirmationDialog().then((confirmed) => {
      if (confirmed) {
        this.authenticationService.logout();
        this.router.navigate(['login']);
      }
    });
  }

}
