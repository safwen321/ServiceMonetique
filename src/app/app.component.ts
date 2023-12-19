import { Component } from '@angular/core';
import {addDoc, collection, Firestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monetiquebource';
  user : any = {
    n_carte : "",
    n_cin : "",
    password : "",
  }
  payer() {
    console.log(this.user);
    alert("Paiement effectué avec succès");
  }
  constructor(private firebase : Firestore) {}
  add() {
    const collectionRef = collection(this.firebase, 'users');
    addDoc(collectionRef, this.user).then(()=>alert("Merci pour inscrire a bource service")).catch(()=>alert("Erreur"));
  }
}
