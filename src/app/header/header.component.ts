import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  goToConoceMas() {
    this.router.navigate(['conocenos']);
  }

  goToRevisionDocumental() {
    this.router.navigate(['revision-documental']);
  }

  goToLandingPage() {
    this.router.navigate(['inicio']);
  }

  goToDatos() {
    this.router.navigate(['datos-cuantitativos']);
  }

  goToContarHistoria() {
    this.router.navigate(['quiero-contar-mi-historia']);
  }
}
