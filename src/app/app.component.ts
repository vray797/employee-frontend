import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './header/header.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports:[ RouterOutlet, SidenavComponent, BodyComponent, HeaderComponent]
})

export class AppComponent {
  title = 'employee-frontend';
  isSideNavCollapsed = false;
  screenWidth = 0;

  ontoggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }
}
