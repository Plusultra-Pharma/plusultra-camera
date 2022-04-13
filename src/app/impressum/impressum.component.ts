import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
//export class ImpressumComponent implements OnInit {
export class ImpressumComponent {

  constructor(private modalCtrl: ModalController) { }

  // ngOnInit() {}

  closeModal() {
  	       this.modalCtrl.dismiss();
  }

}
