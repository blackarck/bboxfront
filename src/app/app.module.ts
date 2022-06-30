import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuggmaincmpComponent } from './suggmaincmp/suggmaincmp.component';
import { LogincmpComponent } from './logincmp/logincmp.component';
import { RegisterComponent } from './register/register.component';
import { RegpasscmpComponent } from './regpasscmp/regpasscmp.component';
import { UserdtlcmpComponent } from './userdtlcmp/userdtlcmp.component';

@NgModule({
  declarations: [
    AppComponent,
    SuggmaincmpComponent,
    LogincmpComponent,
    RegisterComponent,
    RegpasscmpComponent,
    UserdtlcmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
