import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './core/modules/app-routing.module';
import {GraphQLModule} from './core/modules/graphql.module';
import { ContactItemComponent } from './core/components/contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
