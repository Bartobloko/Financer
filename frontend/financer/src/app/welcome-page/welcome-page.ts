import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import {MatRipple} from "@angular/material/core";
import {NgClass} from "@angular/common";
import {CtaAboutComponent} from "../cta-about/cta-about.component";
import {CtaChartsComponent} from "../cta-charts/cta-charts.component";
import {CtaCalendarComponent} from "../cta-calendar/cta-calendar.component";
import {CtaJoinUsComponent} from "../cta-join-us/cta-join-us.component";
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatRipple,
    NgClass,
    CtaAboutComponent,
    CtaChartsComponent,
    CtaCalendarComponent,
    CtaJoinUsComponent,
    MatIcon
  ],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss'
})
export class WelcomePage {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `githubIcon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/github-mark-white.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `linkedInIcon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/linkedInIcon.svg")
    );
  }


  activeButtonIndex: number = 0;
  buttons = Array(4).fill(null);

  changeSlide(index: number): void {
    this.activeButtonIndex = index;
  }

}
