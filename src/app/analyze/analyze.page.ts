import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.page.html',
  styleUrls: ['./analyze.page.scss'],
})
export class AnalyzePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/*
  takeSnap() {
    this.cameraPreview.takeSnapshot({quality: 85}).then((data) => {
       this.currentImage = 'data:image/jpeg;base64,' + data;
       requestAnimationFrame(takeSnap)
    });
  }
*/
}
