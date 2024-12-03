import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navBarData } from './nav-data';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  imports: [ NgFor, RouterLink, CommonModule, NgIf, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  public navData = navBarData
  screenWidth = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

}
