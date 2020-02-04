import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {KeycloakTokenParsed} from "keycloak-js";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: KeycloakTokenParsed;

  constructor(protected keycloakService: KeycloakService) {
  }

  ngOnInit() {
    this.profile = this.keycloakService.getKeycloakInstance().tokenParsed;
    console.log(this.keycloakService.getKeycloakInstance().tokenParsed);

  }

  public logout() {
    this.keycloakService.getKeycloakInstance().logout();
  }
}
