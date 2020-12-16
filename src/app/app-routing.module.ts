import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
const app_routes: Routes=[
    {path:'',component:HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'**', pathMatch:'full', redirectTo:''}
];
@NgModule({
    imports:[
        RouterModule.forRoot(app_routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{ }