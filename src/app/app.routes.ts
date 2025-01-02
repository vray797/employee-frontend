import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PagesComponent } from './components/pages/pages.component';
import { MediaComponent } from './components/media/media.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {
        path: 'products',
        loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
    },
    {path: 'statistics', component: StatisticsComponent},
    {
        path: 'coupon',
        loadChildren: () => import('./components/coupons/coupens/coupens.module').then(m => m.CoupensModule)
    },
    {path: 'pages', component: PagesComponent},
    {path: 'media', component: MediaComponent},
    {path: 'settings', component: SettingsComponent}
];
