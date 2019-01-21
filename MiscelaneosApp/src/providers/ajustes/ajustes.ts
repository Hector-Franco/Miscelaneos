import { Injectable, PlatformRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { platformBrowser } from '@angular/platform-browser';


@Injectable()
export class AjustesProvider {

  ajustes = {
    tutorial: true
  }

  constructor(private platform: Platform,
    private storage: Storage) {
    console.log('Hello AjustesProvider Provider');
  }

  /* Traer la data */
  cargarStorage() {


    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        //Dispositivo movil
        console.log("Inicializando storage")
        this.storage.ready().then(() => {
          console.log("Storage listo")
          this.storage.get("ajustes").then((ajustes) => {
            this.ajustes = ajustes
            resolve();
          })//Nombre de llave
            .catch((error) => console.log("Error interno: " + error))
        }).catch((error) => console.log("Error Cargando: " + error));

      } else {
        if (localStorage.getItem("ajustes")) {
          this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
        }

        resolve();
      }
    })

    return promesa;




  }

  /* Guardar la data */
  guardarStorage(ajustes: boolean) {
    if (this.platform.is('cordova')) {
      //Dispositivo movil
      this.storage.ready().then(() => {
          this.storage.set("ajustes", this.ajustes)
      }).catch((error) => console.log("Error Guardando: " + error))


    } else {
      this.ajustes.tutorial = ajustes;
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes))
    }
  }

}
