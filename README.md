# Detector Application

![Detector Application](img/gallery.png)

## How It Works

After the user navigates to Detector tab, they can tap/click on the camera button to open up the device's camera. After taking or selecting a photo, it's stored permanently into the device's filesystem. When the user reopens the app at a later time, the photo images are loaded from the filesystem and displayed again in the gallery.

## Feature Overview
* App framework: [Angular](https://angular.io)
* UI components: [Ionic Framework](https://ionicframework.com/docs/components)
  * Camera button: [Floating Action Button (FAB)](https://ionicframework.com/docs/api/fab)
  * Photo Gallery display: [Grid](https://ionicframework.com/docs/api/grid)
  * Delete Photo dialog: [Action Sheet](https://ionicframework.com/docs/api/action-sheet) 
* Native runtime: [Capacitor](https://capacitor.ionicframework.com)
  * Taking photos: [Camera API](https://capacitor.ionicframework.com/docs/apis/camera)
  * Writing photo to the filesystem: [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem)
  * Storing photo gallery metadata: [Storage API](https://capacitor.ionicframework.com/docs/apis/storage)


## Configuration

* Template

    	$ ionic start detector sidemenu --type=angular --capacitor
	    $ cd detector
	
	    ## Installing Capacitor and PWA frameworks
	    $ npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
	    $ npm install @ionic/pwa-elements
	
	    ## Generating photo service template
	    $ ionic generate service services/photo
	
	    ## Adding platform
	    $ ionic cap add android	
	    $ ionic cap copy
	    $ ionic cap sync


* Splash screen [resource script](https://gist.github.com/dalezak/a6b1de39091f4ace220695d72717ac71#file-resources-js)

        ## Adding resources
        $ npm install cordova-res --save-dev
        ## Add "resources": "cordova-res ios && cordova-res android && node scripts/resources.js" to scripts in package.json
        ## resources.js file to scripts/resources.js
        $ sudo chmod -R 777 scripts/resources.js
        $ npm run resources


## Running in emulator

        $ ionic cap run android -l --external

## Application overview
After opening the application, click the 'Camera' bottun. Then, one can take the photo and can analyze it.

![Detector Mode](img/detector.png)

![Sidemenu](img/sidemenu.png)

![Gallery](img/gallery.png)

![Gallery](img/calendar.png)

![Impressum](img/impressum.png)


## Reference

 * https://ionicframework.com/docs/angular/your-first-app
 * https://analyticsindiamag.com/10-face-datasets-to-start-facial-recognition-projects/
 * https://www.positronx.io/ionic-calendar-ui-tutorial-examples-from-scratch/
 * https://ionicframework.com/docs/v3/ionicons/

## History

 * Ver. 0.1 - 2022.Apr.08, Prototype for a testbed.
 * Ver. 0.2 - 2022.Apr.13, Prototype. Using sidemenu
 

## License



