import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

       constructor(public photoService: PhotoService,
            public actionSheetController: ActionSheetController) {}

       addPhotoToGallery() {
        this.photoService.addNewToGallery();
        }

        async ngOnInit() {
         await this.photoService.loadSaved();
        }

        public async showActionSheet(photo: UserPhoto, position: number) {
         	const actionSheet = await this.actionSheetController.create({
         	header: 'Photos',
         	buttons: [{
         	text: 'Delete',
         	role: 'destructive',
         	icon: 'trash',
         	handler: () => {
                  this.photoService.deletePicture(photo, position);
                  }
        	}, {
        	text: 'Cancel',
        	icon: 'close',
        	role: 'cancel',
        	handler: () => {
        	// Nothing to do, action sheet is automatically closed
        	}
    		}]
  		});
  		
  		await actionSheet.present();
  	}

}
