import { HttpJwtInterceptor } from './http.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInputModule, MatOptionModule, MatSlideToggleModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticipationComponent } from './participation/participation.component';
import { MatSelectModule } from '@angular/material/select';
import { CheckerComponent } from './checker/checker.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    LoginComponent,
    ParticipationComponent,
    CheckerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    NgxScannerQrcodeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpJwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
