import { Component} from '@angular/core';
import { Personaje } from 'src/app/interFaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  //atributos=variables
  nombre: string="NOCTURNO";
  edad:number=100;

  numeros:any[]=[1,2,3,4,5,6,7,8,9,10];
 // personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/cuatro.jpg?alt=media&token=5bf45d16-d87e-48a3-80ef-061671c15ecf","https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/tres.jpg?alt=media&token=759bfe6a-98d5-415d-a8fd-54ddb1366321","https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/dos.jpg?alt=media&token=d57c0c1e-1807-4b50-89d3-9c51195fc6f5","https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/sinco.jpg?alt=media&token=f3c5e589-12c3-4184-a831-8dc74cd362ac","https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/una.jpg?alt=media&token=ab83e7a3-74e2-42d8-9c65-99c4cdb25954","https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/six.png?alt=media&token=13f91d4e-6e52-4b66-8469-288384b3c1b6"]

  personajes:Personaje[]=[
    {
      "nombre":"bengi",
      "edad":19,
      "foto":"https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/cuatro.jpg?alt=media&token=5bf45d16-d87e-48a3-80ef-061671c15ecf"
    },
    {
      "nombre":"david",
      "edad":25,
      "foto":"https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/dos.jpg?alt=media&token=d57c0c1e-1807-4b50-89d3-9c51195fc6f5"
    },
    {
      "nombre":"rolo",
      "edad":20,
      "foto":"https://firebasestorage.googleapis.com/v0/b/soledme-mortis.appspot.com/o/sinco.jpg?alt=media&token=f3c5e589-12c3-4184-a831-8dc74cd362ac"
    }



  ];

  constructor() { }


}
