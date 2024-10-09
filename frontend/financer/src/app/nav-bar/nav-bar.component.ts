import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {MatAnchor} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    MatAnchor,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.authService.isUserLoggedIn$.subscribe(isUserLoggedIn => {
      this.isAuthenticated = isUserLoggedIn;
    })
  }

  logout() {
    localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(['/login'])
  }

}
