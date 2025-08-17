Project Console: https://console.firebase.google.com/project/david-kim-aveda-salon/overview
Hosting URL: https://david-kim-aveda-salon.web.app

davidsalon_react on  invoice [?] via  v20.11.1 on ☁️ gospelway128@gmail.com took 41s
❯ firebase init hosting

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

/Users/johnchang/dev/davidsalon_react

Before we get started, keep in mind:

- You are initializing within an existing Firebase project directory

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

i Using project david-kim-aveda-salon (david-kim-aveda-salon)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

✔ What do you want to use as your public directory? build
✔ Configure as a single-page app (rewrite all urls to /index.html)? Yes
✔ Set up automatic builds and deploys with GitHub? No
✔ File build/index.html already exists. Overwrite? Yes
✔ Wrote build/index.html

✔ Wrote configuration info to firebase.json
✔ Wrote project information to .firebaserc

✔ Firebase initialization complete!

davidsalon_react on  invoice [?] via  v20.11.1 on ☁️ gospelway128@gmail.com took 2m19s
❯ npm run build

> my-app@1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

575.5 kB build/static/js/main.17af15af.js
4.42 kB build/static/css/main.d6e11521.css

The bundle size is significantly larger than recommended.
Consider reducing it with code splitting: https://goo.gl/9VhYWB
You can also analyze the project dependencies: https://goo.gl/LeUzfb

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

yarn global add serve
serve -s build

Find out more about deployment here:

https://cra.link/deployment

davidsalon_react on  invoice [?] via  v20.11.1 on ☁️ gospelway128@gmail.com took 26s
❯ firebase deploy

=== Deploying to 'david-kim-aveda-salon'...

i deploying hosting
i hosting[david-kim-aveda-salon]: beginning deploy...
i hosting[david-kim-aveda-salon]: found 70 files in build
✔ hosting[david-kim-aveda-salon]: file upload complete
i hosting[david-kim-aveda-salon]: finalizing version...
✔ hosting[david-kim-aveda-salon]: version finalized
i hosting[david-kim-aveda-salon]: releasing new version...
✔ hosting[david-kim-aveda-salon]: release complete

✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/david-kim-aveda-salon/overview
Hosting URL: https://david-kim-aveda-salon.web.app
