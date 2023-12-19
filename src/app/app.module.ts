import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {initializeApp} from "firebase/app";
import {provideFirebaseApp,initializeApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {environment} from "../environments/environments.prod";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
