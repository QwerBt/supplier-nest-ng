import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { CompanyProfileComponent } from '../modules/company/company-profile/company-profile.component';
import { CatalogComponent } from '../modules/user/catalog/catalog.component';
import { CompanyComponent } from '../modules/user/company/company.component';
import { InfoRequestComponent } from '../modules/user/info-request/info-request.component';
import { ManagerComponent } from '../modules/user/products/manager/manager.component';
import { ProductsComponent } from '../modules/user/products/products.component';
import { RecentActivityComponent } from '../modules/user/recent-activity/recent-activity.component';
import { RequestsComponent } from '../modules/user/requests/requests.component';
import { SavedComponent } from '../modules/user/saved/saved.component';
import { ShortlistsComponent } from '../modules/user/shortlists/shortlists.component';
import { SuppliersComponent } from '../modules/user/suppliers/suppliers.component';
import { UserProfileComponent } from '../modules/user/user-profile/user-profile.component';

// Lazy loading example
// {
//     path: 'products',
//     loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
//   }

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'suppliers', component: SuppliersComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product-manager', component: ManagerComponent },
    { path: 'requests', component: RequestsComponent },
    { path: 'recent-activity', component: RecentActivityComponent },
    { path: 'shortlists', component: ShortlistsComponent },
    { path: 'saved', component: SavedComponent },
    { path: 'info-request', component: InfoRequestComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'company-profile', component: CompanyProfileComponent },

    { path: '**', redirectTo: '/notfound' }
] as Routes;
