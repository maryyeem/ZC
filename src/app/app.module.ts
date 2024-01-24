import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import {CreateAccountComponent} from './create-account/create-account.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {accountListComponent} from './account-list/account-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UpdateAccountComponent} from './update-account/update-account.component';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({

    declarations: [


        CreateAccountComponent,
        AccountDetailsComponent,
        accountListComponent,
        UpdateAccountComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        
    ],
    providers:[provideRouter(routes)],
    bootstrap: [AppComponent]

    })
export class AppModule{}
