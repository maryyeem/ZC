import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import {NgModule} from '@angular/core';
import { CreateAccountComponent } from './create-account/create-account.component';
import { accountListComponent } from './account-list/account-list.component';
import { UpdateAccountComponent } from './update-account/update-account.component';

export const routes: Routes = [
    {path:'',redirectTo:'account',pathMatch:'full'},
    {path: 'accounts', component:accountListComponent},
    {path: 'add', component:CreateAccountComponent},
    {path: 'update/:id', component:UpdateAccountComponent},
    {path: 'details/:id', component:AccountDetailsComponent},
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}