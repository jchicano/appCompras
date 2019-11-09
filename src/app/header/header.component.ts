import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from './../services/autenticacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {
    return this.autService.isAuthenticated();
  }

  onLogout() {
    this.autService.logout(); this.router.navigate(['/inicio'])
  }

}
