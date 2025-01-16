
import { Routes } from "@angular/router"
import { UserComponent } from "../pages/user/user.component"
import { UsersComponent } from "../pages/users/users.component"
import { AdminComponent } from "../pages/admin/admin.component"
import { InventoryComponent } from "../pages/inventory/inventory.component"


export const AdminChildrenRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'user/:id',
                title: 'User',
                component: UserComponent
            },
            {
                path: 'users',
                title: 'users',
                component: UsersComponent
            },
            {
                path: 'inventory',
                title: 'inventory',
                component: InventoryComponent
            },
            {
                path: '',
                title: 'admin',
                pathMatch: 'full',
                component: AdminComponent
            },
            {
                path: '**', // route every undefined route to the root of this feature
                redirectTo: ''
            }
        ]
    }
]