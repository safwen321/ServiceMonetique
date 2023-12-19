import { Component } from '@angular/core';
import {  Firestore,collectionData} from "@angular/fire/firestore";
import { addDoc,collection, CollectionReference, deleteDoc,  } from 'firebase/firestore';
import {Observable} from "rxjs";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  private collections: CollectionReference;
  data : any[] = [];
  constructor(public firebase : Firestore) {
    this.collections = collection(this.firebase, 'users');
  }

  getData(){
    return collectionData(this.collections,{  idField: 'id'}) as Observable<any[]>;
  }
  ngOnInit(): void {
    this.getData().subscribe((data)=>{
      console.log(data);
      this.data = data;
    });
  }

}
