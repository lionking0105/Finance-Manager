import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  DEFAULT_CURRENCY_CODE,
  APP_INITIALIZER,
} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IsLoadingModule } from '@service-work/is-loading';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './Components/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './Navigation/navigation.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ServiceModule } from './Services/service.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegisterComponent } from './Pages/register/register.component';
import { AccountsComponent } from './Pages/accounts/accounts.component';
import { TransactionsComponent } from './Pages/transactions/transactions.component';
import { AccountDetailsComponent } from './Pages/account-details/account-details.component';
import { FinanceApiRequest } from './Services/finance-api.request.service';
import { TransactionDetailsComponent } from './Pages/transaction-details/transaction-details.component';
import { DatePipe } from '@angular/common';
import { ComponentModule } from './Components/component.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    AccountsComponent,
    TransactionsComponent,
    AccountDetailsComponent,
    TransactionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceModule,
    HttpClientModule,
    FlexLayoutModule,
    ComponentModule,
    IsLoadingModule,
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP' },
    {
      provide: APP_INITIALIZER,
      useFactory: FinanceApiRequest.LoadBaseUrl,
      deps: [HttpClient],
      multi: true,
    },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
