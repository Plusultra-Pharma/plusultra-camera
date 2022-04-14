import { ImpressumComponent } from './impressum/impressum.component';
import { ModalController } from '@ionic/angular';

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Camera', url: 'camera', icon: 'camera' },
    { title: 'Analyze', url: 'analyze', icon: 'flask' },
    { title: 'Calendar', url: 'calendar', icon: 'calendar' },    
  ];
  public labels = ['Impressum'];
  
  //constructor() {}
  constructor(private modalCtrl: ModalController) { }

  async openModal() {
              const modal = await this.modalCtrl.create({
                component: ImpressumComponent
              });
  await modal.present();
  }

}
