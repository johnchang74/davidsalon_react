Project Console: https://console.firebase.google.com/project/david-kim-aveda-salon/overview
Hosting URL: https://david-kim-aveda-salon.web.app
root@grace-ThinkPad-T431s:/opt/davidsalon_react# firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /opt/davidsalon_react

Before we get started, keep in mind:

  * You are currently outside your home directory
  * You are initializing in an existing Firebase project directory

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm y
our choices. Hosting: Configure and deploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

i  .firebaserc already has a default project, using david-kim-aveda-salon.

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File build/index.html already exists. Overwrite? Yes
✔  Wrote build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
root@grace-ThinkPad-T431s:/opt/davidsalon_react# npm run build

> my-app@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  56.26 KB  build/static/js/2.35e87f9c.chunk.js
  5.12 KB   build/static/js/main.1c3054a9.chunk.js
  772 B     build/static/js/runtime-main.83c3e0c4.js
  278 B     build/static/css/main.5ecd60fb.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy

root@grace-ThinkPad-T431s:/opt/davidsalon_react# firebase deploy

=== Deploying to 'david-kim-aveda-salon'...

i  deploying hosting
i  hosting[david-kim-aveda-salon]: beginning deploy...
i  hosting[david-kim-aveda-salon]: found 50 files in build
✔  hosting[david-kim-aveda-salon]: file upload complete
i  hosting[david-kim-aveda-salon]: finalizing version...
✔  hosting[david-kim-aveda-salon]: version finalized
i  hosting[david-kim-aveda-salon]: releasing new version...
✔  hosting[david-kim-aveda-salon]: release complete

✔  Deploy complete!