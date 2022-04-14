#!/bin/bash

## Installing Capacitor and PWA frameworks
npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
npm install @ionic/pwa-elements
	
## Generating photo service template
ionic generate service services/photo
	
## Adding platform
ionic cap add android	
ionic cap copy
ionic cap sync

## Splash screen
npm run resources

## Page skeleton
#ionic generate page camera
#ionic generate service services/photo
#ionic generate component impressum
# npm install --save ion2-calendar@next moment

