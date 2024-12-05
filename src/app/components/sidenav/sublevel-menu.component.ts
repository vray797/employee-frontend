import { Component, Input, OnInit } from '@angular/core';
import { INavBarData } from './helper'
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  imports: [CommonModule, NgIf, NgFor, NgClass, RouterModule, SublevelMenuComponent],
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0" class="sublevel-nav">
      <li *ngFor="let item of data.items;" class="sublevel-nav-item" (click)="handleClick(item)">
        <a href="" class="sublevel-nav-link"
        *ngIf="item.items && item.items.length > 0">
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapsed-icon" [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"]>
          </i>
        </a>

        <a href="" class="sublevel-nav-link"
        *ngIf="!item.items || (item.items && item.items.length == 0)"
        [routerLink]="[item.routeLink]"
        routerLinkActive="active-sublevel"
        [routerLinkActiveOptions]="{exact: true}"]>
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
        </a>

        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu [collapsed]="collapsed" [multiple]="multiple" [expanded]="item.expanded"]></app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrl: './sidenav.component.scss'
})
export class SublevelMenuComponent implements OnInit{

  @Input() data: INavBarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  ngOnInit(): void {
      
  }

  handleClick(item: any) {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for(let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

}
