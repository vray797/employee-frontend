import { INavBarData } from "./helper";

export const navBarData: INavBarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },

    {
        routeLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Level1.1',
                items: [
                    {
                        routeLink: 'products/level2.1',
                        label: 'Level 2.1'
                    }
                ]
            }
        ]
    },

    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },

    {
        routeLink: 'coupon',
        icon: 'fal fa-tags',
        label: 'Coupon',
        items: [
            {
                routeLink: 'coupon/list',
                label: 'List Coupons'
            },
            {
                routeLink: 'coupon/create',
                label: 'Create Coupons'
            }
        ]
    },

    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },

    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },

    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    },
]