import { CommonModule, isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { CdkMenuModule } from '@angular/cdk/menu'
import { Languages } from './header-dummy-data';

@Component({
  selector: 'app-header',
  imports: [NgClass, NgIf, CdkMenuModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = Languages;

  constructor(@Inject(PLATFORM_ID) readonly platformId: Object) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth)
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
      this.selectedLanguage = this.languages[0]
    }
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }

}
