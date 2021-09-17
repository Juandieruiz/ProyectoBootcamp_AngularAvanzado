  
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'empleados';
// }



import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './services/empleado.service';
import { SwUpdate } from "@angular/service-worker";
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'empleados';
  empleados: any[] = [];

  ngOnInit(){
    this.recargarCache();
  }

  constructor
  (private firestore: AngularFirestore,
    private _dataService: EmpleadoService,
    private _swUpdate: SwUpdate,
    ) {}


// // Metodo encargado de recargar la aplicacion cuando el serviceWorker detecta que hay una nueva version
recargarCache(){


  if(this._swUpdate.isEnabled){
    this._swUpdate.available.subscribe(
      (event) => {
        if(confirm('Hay una nueva versión disponible. ¿Desea cargarla?')){
          this._swUpdate.activateUpdate()
          .then(
            () => window.location.reload()
          ).catch(
            (error) =>alert(`Ha habido un error al obtener la información: ${error}`))
        }
      },
      (error) => alert(`Ha habido algún error al cargar una nueva versión: ~${error}`),
      () => console.log(`Nueva version de la app disponible y cargada`)
    );
  }
}

// // getEmpleados(): Observable<any>{
// //   return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
// // }
}
