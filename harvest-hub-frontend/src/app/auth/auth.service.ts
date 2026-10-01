import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Demo authentication service (frontend-only).
 *
 * Demo credentials:
 *   Username: farmmanager
 *   Password: harvest2024
 *
 * This can be replaced with a real Spring Security / JWT implementation later.
 * All auth state is stored in localStorage so it persists across page reloads.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly STORAGE_KEY = 'harvesthub_auth';

  /** Demo credentials — clearly documented, not real passwords */
  private readonly DEMO_USERNAME = 'farmmanager';
  private readonly DEMO_PASSWORD = 'harvest2024';

  private readonly DEMO_USER = {
    name: 'Farm Manager',
    role: 'Farm Administrator',
    username: 'farmmanager',
    email: 'farmmanager@harvesthub.com',
    status: 'Active',
    application: 'HarvestHub'
  };

  constructor(private router: Router) { }

  /**
   * Attempt login with the given credentials.
   * Accepts either username ('farmmanager') or email ('farmmanager@harvesthub.com').
   * Returns true on success, false on failure.
   */
  login(identifier: string, password: string): boolean {
    const input = identifier?.trim().toLowerCase();
    const isUsernameMatch = input === this.DEMO_USERNAME.toLowerCase();
    const isEmailMatch = input === this.DEMO_USER.email.toLowerCase();

    if (
      (isUsernameMatch || isEmailMatch) &&
      password === this.DEMO_PASSWORD
    ) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.DEMO_USER));
      return true;
    }
    return false;
  }

  /** Log the user out and redirect to login page. */
  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.router.navigate(['/login']);
  }

  /** Check whether a user is currently logged in. */
  isLoggedIn(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) !== null;
  }

  /** Get the current user's profile data, or null if not logged in. */
  getUser(): any | null {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }
}
