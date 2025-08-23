import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { DetailsComponent } from './features/details/details.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { ContactusComponent } from './features/contactus/contactus.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        /* auth */
        path: '',
        component: AuthLayoutComponent, children: [
            { path: 'login', component: LoginComponent, title: 'MyDoctor - Login' },
            { path: 'register', component: RegisterComponent, title: 'MyDoctor - Register' }
        ]
    },
    {
        /* blank */
        path: '',
        component: BlankLayoutComponent, children: [
            { path: 'home', component: HomeComponent, title: 'MyDoctor' },
            { path: 'details', component: DetailsComponent, title: 'MyDoctor - Details' },
            { path: 'contact', component: ContactusComponent, title: 'MyDoctor - ContactUs' }
        ]
    },
    { path: '**', component: NotfoundComponent, title: 'NotFound Page' }
];
