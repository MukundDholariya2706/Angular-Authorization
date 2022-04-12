import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

  private isAuthorized(route: ActivatedRouteSnapshot): boolean {
    const roles = ['admin'];
    const expectedRole = route.data['expectedRoles'];
    const roleMatch = roles.findIndex(role => expectedRole.indexOf(role) !== -1);
    return roleMatch < 0 ? false : true;
  }
  
}
