import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';

export const ownerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.hasOwnerToken())
    return true; // puede navegar
  return router.navigate(['/auth/login']);
};
export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.hasAdminToken())
    return true; // puede navegar
  return router.navigate(['/auth/login']); // redirige a login
};
