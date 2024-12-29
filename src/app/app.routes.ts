import { Routes } from '@angular/router';

import { LoginformComponent } from './components/loginform/loginform.component';

import { CircleComponent } from './components/circle/circle.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

export const routes: Routes = [
    {
        path:"",
        component:LandingpageComponent
    },
    {
        path:"login",
        component:LoginformComponent
    },
    {
        path:"Users",
        component:UserProfilesComponent,
        // canActivate : [AuthGhuard]
    },
    {
        path : "circle/:id",
        component:CircleComponent
    },
    {
        path : "",
        component:LandingpageComponent
    }
    
];
