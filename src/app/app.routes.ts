import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { canActivateAuth } from './auth/access.guard';

export const routes: Routes = [
    {path : 'login', component: LoginPageComponent}, 
    
    {path: '', component: LayoutComponent, children: [
        {path : 'profile', component: ProfilePageComponent}, 
        {path : '', component: SearchPageComponent}
    ], 
    canActivate: [canActivateAuth]


}, 

];
