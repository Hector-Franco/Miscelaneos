import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  pagina2 = Pagina2Page;
  constructor(public navCtrl: NavController) {

  }
   

  /* ionViewCanEnter() boolean
     Verifica si es usuario tiene permiso de acceder a esta página */

  /* ionViewDidLoad(): void
     Evento disparado unsa única vez  */

  /* ionViewWillEnter(): void
     Ejecuatada cuada vez que la página se vuelve a activar  */

  /* ionViewDidEnter(): void 
     Se ejecuta cuando la página es cargada y se vuelve a activar*/

  /* ionViewCanLeave(): boolena
     verifica s el usuario puede salir de la página en cuestión */

  /* ionViewWillLeave(): void
     Ejecutado cuando la página está a punto de ser inactiva */

  /* ionViewDidLeave(): void 
     Ceuando la página se acaba de inactivar*/

  /* ionViewDidLeave(): void
     Se ejecuta cuando la página ha terminado de salir */


}
