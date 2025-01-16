import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'home page',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        title: 'home page',
        loadComponent: () => import('./pages/home/home.component').then(h => h.HomeComponent)
    },
    {
        path: 'admin',
        title: 'admin page',
        loadChildren: () => import('./routes/admin-children').then(c => c.AdminChildrenRoutes)
    },

    {
        path: 'products',
        title: 'products',
        loadComponent: () => import('./pages/products/products.component').then(p => p.ProductsComponent)
    },
    {
        path: 'cart',
        title: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(k => k.CartComponent)
    },
    {
        path: '**',
        title: '404',
        loadComponent: () => import('./pages/not-found/not-found.component').then(n => n.NotFoundComponent)
    }
];