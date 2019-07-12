import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
import {HrdataComponent} from './hrdata/hrdata.component'

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { 
        path: 'userProfile', component: UserProfileComponent
    },
    { path: 'hrdata', component: HrdataComponent
},
    
    {
        path: '', redirectTo: '/signup', pathMatch: 'full'
    }
];