import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
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


@Component({
  imports:[RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
})


export class AppComponent {
  title = 'Accounts Manager';
}

