import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/feature/components/login/login.component';
import { HomeComponent } from './components/feature/components/home/home.component';
import { RegisterComponent } from './components/feature/components/register/register.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
