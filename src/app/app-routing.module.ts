import { RoleGuardGuard } from './core/guards/role-guard.guard';
import { Component1Component } from './components/component1/component1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component2Component } from './components/component2/component2.component';
import { AuthGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'component1',
    component: Component1Component,
    canActivate: [AuthGuard, RoleGuardGuard],
    data: {
      expectedRoles: ['admin', 'user']
    }
  },
  {
    path: 'component2',
    component: Component2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
