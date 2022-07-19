# rally-vite-template

A Vite template for getting started developing custom Broadcom Rally applications using a modern approach


## Setup 

To scaffold in current folder

`npx degit am283721/rally-vite-template`

To scaffold in a new sub folder

`npx degit am283721/rally-vite-template new-rally-app`

Then

`npm i`

`npm run dev -- --open`

You will need to have an active Rally session, or login when prompted.


## Development


Dev: `npm run dev`

Build: `npm run build`

Preview: `npm run preview`

 

To develop locally and take advantage of Vite's Hot Module Reloading, include a `.env` file with a `VITE_APP_API_KEY` variable set to an API Key that you own. If you receive a prompt to login to Rally when starting up the dev server, open a new tab and login to Rally so that you browser can store the session information.