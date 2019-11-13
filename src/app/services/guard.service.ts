import { AutenticacionService } from './autenticacion.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  canActivate( // https://angularfirebase.com/lessons/router-guards-to-redirect-unauthorized-firebase-users/
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.autenticacionService.isAuthenticated()) { return true; }

    // Access denied - user not logged in
    this.router.navigate(['/iniciosesion']);
    return false;
  }

}
