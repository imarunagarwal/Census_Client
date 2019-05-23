import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthInterceptor } from './guards/auth/auth.interceptor';
import { RegisterComponent } from './register/register.component';
import { HouseListingComponent } from './register/house-listing/house-listing.component';
import { PopulationRegisterComponent } from './register/population-register/population-register.component';
import { HousingService } from './shared/House/housing.service';
import { PopulationRegisterService } from './shared/Population/population-register.service';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { PendingRequestsComponent } from './admin-view/pending-requests/pending-requests.component';
import { DeclinedRequestsComponent } from './admin-view/declined-requests/declined-requests.component';
import { ApprovedRequestsComponent } from './admin-view/approved-requests/approved-requests.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserService } from './shared/User/user.service';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { GraphsComponent } from './graphs/graphs.component';
import { StateWiseGraphComponent } from './graphs/state-wise-graph/state-wise-graph.component';
import { AgeWiseGraphComponent } from './graphs/age-wise-graph/age-wise-graph.component';
import { GraphsService } from './shared/Graphs/graphs.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuardService } from './guards/role/role-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    HouseListingComponent,
    PopulationRegisterComponent,
    RegisterComponent,
    AdminViewComponent,
    PendingRequestsComponent,
    DeclinedRequestsComponent,
    ApprovedRequestsComponent,
    UserInfoComponent,
    GraphsComponent,
    StateWiseGraphComponent,
    AgeWiseGraphComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [UserService, HousingService, PopulationRegisterService, AuthGuard,GraphsService,RoleGuardService
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
