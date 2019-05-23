import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './guards/auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { HouseListingComponent } from './register/house-listing/house-listing.component';
import { PopulationRegisterComponent } from './register/population-register/population-register.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { PendingRequestsComponent } from './admin-view/pending-requests/pending-requests.component';
import { DeclinedRequestsComponent } from './admin-view/declined-requests/declined-requests.component';
import { ApprovedRequestsComponent } from './admin-view/approved-requests/approved-requests.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { GraphsComponent } from './graphs/graphs.component';
import { StateWiseGraphComponent } from './graphs/state-wise-graph/state-wise-graph.component';
import { AgeWiseGraphComponent } from './graphs/age-wise-graph/age-wise-graph.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuardService } from './guards/role/role-guard.service';


export const appRoutes: Routes = [
    
    { path: 'home', component: HomeComponent },

    { path: 'dashboard', component: DashboardComponent },

    { path: 'userInfo', component: UserInfoComponent ,canActivate:[AuthGuard,RoleGuardService] },

    { 
        path: 'pending', component: AdminViewComponent ,canActivate:[AuthGuard,RoleGuardService],
        children: [{ path: '', component: PendingRequestsComponent }]
    },
    { 
        path: 'declined', component: AdminViewComponent ,canActivate:[AuthGuard,RoleGuardService],
        children: [{ path: '', component: DeclinedRequestsComponent }]
    },
    { 
        path: 'approved', component: AdminViewComponent ,canActivate:[AuthGuard,RoleGuardService],
        children: [{ path: '', component: ApprovedRequestsComponent }]
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'house', component: RegisterComponent ,canActivate:[AuthGuard,RoleGuardService],
        children: [{ path: '', component: HouseListingComponent }]
    },
    {
        path: 'population', component: RegisterComponent, canActivate:[AuthGuard,RoleGuardService],
        children: [{ path: '', component: PopulationRegisterComponent }]
    },
    {
        path: 'stateWise', component: GraphsComponent,
        children: [{ path: '', component: StateWiseGraphComponent }]
    },
    {
        path: 'ageWise', component: GraphsComponent,
        children: [{ path: '', component: AgeWiseGraphComponent }]
    },
    { path : '', redirectTo:'/home', pathMatch : 'full'}
];