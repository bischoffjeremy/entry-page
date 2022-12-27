import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material/sidenav';
import {delay, filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {FormControl} from "@angular/forms";
import {ConfigService} from "./services/config.service";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navbarOpen  = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  darkModeControl = new FormControl(false);
  @HostBinding('class') className = '';

  constructor(private observer: BreakpointObserver, private router: Router,public configService: ConfigService) {}

  ngOnInit(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Add an event listener to update isDarkMode when the preference changes
    mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      this.darkModeControl.setValue(event.matches);
    });

    this.darkModeControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
    });

    this.darkModeControl.setValue(true);
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
 toggleNav() {
  this.navbarOpen = !this.navbarOpen;
}

}



