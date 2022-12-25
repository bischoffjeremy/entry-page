import { Component,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarOpen  = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver, private router: Router) {}

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


  // Array mit Daten für die Kacheln
  tiles = [
    { title: 'App 1', description: 'Beschreibung der App 1' },
    { title: 'App 2', description: 'Beschreibung der App 2' },
    { title: 'App 3', description: 'Beschreibung der App 3' },
    // Weitere Kacheln hier hinzufügen...
  ];
  // Array mit Daten für die Iframes
  iframes = [
    { src: 'https://10.101.4.2:3000/d-solo/suTmk8c7k/opnsense?orgId=1&from=1671971116581&to=1671974716581&var-dataSource=OpnsenseData&var-ESdataSource=&var-Host=All&var-Disk=All&var-Sensor=All&var-LAN=All&var-Gateway=All&var-WAN=All&var-iface=All&var-dst_port=All&var-src_ip=All&panelId=34', width: 450, height: 200 },
    // Weitere Iframes hier hinzufügen...
  ];
  // Array mit Daten für die Navigationsleiste
  navLinks = [
    { label: 'Link 1', link: '/link1' },
    { label: 'Link 2', link: '/link2' },
    { label: 'Link 3', link: '/link3' },
    // Weitere Links hier hinzufügen...
  ];
 toggleNav() {
  this.navbarOpen = !this.navbarOpen;
}

} 



