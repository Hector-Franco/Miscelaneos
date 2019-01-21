import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { slides } from '../../assets/data.slides';
import { HomePage } from '../home/home';
import { AjustesProvider } from '../../providers/ajustes/ajustes';


@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {

  slides: Slides[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ajustes: AjustesProvider) {

    this.slides = slides.slice(0);
  }

  /* MÉTODO PARA SALTAR EL TUTORIAL */
  saltarTutorial(){
    
    this._ajustes.guardarStorage(false);
    this.navCtrl.setRoot(HomePage);
  }

}

/* Interface para limitar el uso de los slides */
export interface Slides{
  title: string,
  description: string,
  image: string
}

