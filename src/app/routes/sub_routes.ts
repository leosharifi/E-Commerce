
import { Routes } from "@angular/router";
import { UserComponent } from "../components/user/user.component";
import { UsersComponent } from "../components/users/users.component";
import { AdminComponent } from "../components/admin/admin.component";

export const Children_Routes: Routes = [
    {
        path: '',
        children: [
            {
                //https://remtech-project.web.app/admin/user/:id
                path: 'user/:id',
                title: 'user',
                component: UserComponent,
            },
            {
                //https://remtech-project.web.app/admin/users
                path: 'users', 
                title: 'users',
                component: UsersComponent,
            },
            {
                path: '',
                title: 'admin',
                pathMatch: 'full',
                component: AdminComponent,
            },
            {
                path: '**', // routes every undefined route to the root of this feature
                redirectTo: ''
            }
        ]
    }
]