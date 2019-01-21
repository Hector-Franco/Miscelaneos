import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPaginaTres() {
    this.navCtrl.push("miPagina3");
  }


  /* MÉTODOS DEL CICLO DE VIDA DE LAS PÁGINAS DE IONIC */
  ionViewDidLoad() {
    console.log("ionViewDidLoad()");
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter()");
  }
  ionViewDidEnter() {
    console.log("ionViewDidEnter()");
  }
  ionViewWillLeave() {
    console.log("ionViewWillLeave()");
  }
  ionViewDidLeave() {
    console.log("ionViewDidLeave()");
  }
  ionViewWillUnload() {
    console.log("ionViewWillUnload()");
  }
  ionViewCanEnter(): boolean {
    console.log("ionViewCanEnter()");
    let permiso: boolean = false;
    let numero: number = Math.round(Math.random() * 10);
    console.log(numero);

    if (numero >= 5) {
      console.log("Puede entrar")
      return true;
    }
    else {
      console.log("No puede entrar")
      return false;
    }
    
  }
  ionViewCanLeave() {
    console.log("ionViewCanLeave()");

    console.log("Espero dos segundos para salir");

    let promesa = new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve(true)
      }, 2000);
    })

    return promesa;
  }

 

}
