import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navBarData } from './nav-data';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SublevelMenuComponent } from "./sublevel-menu.component";
import { fadeInOut, INavBarData } from './helper';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  imports: [NgFor, RouterLink, CommonModule, NgIf, RouterModule, SublevelMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0'}),
            style({ transform: 'rotate(4turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{

  constructor(public router: Router) {}

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  public navData = navBarData
  screenWidth = 0;
  multiple: boolean = true;

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

  handleClick(item: INavBarData): void {
    this.shrinkItem(item)
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavBarData) {
    return this.router.url.includes(data.routeLink) ? 'active' : ''
  }

  shrinkItem(item: INavBarData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
