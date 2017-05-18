## React.js Template
This template serves to standardize the DHA apps that will be build with React.js. With a few configuration changes you will
have the foundation for creating your app.

## Creating a new project
For new T2 pwa apps:

1. Create a new project in GitLab under the t2-pwa namespace and make note of the git `ssh` url of the repository
1. Clone this repo using `git clone --depth=1 ssh://git@gitlab.t2.local:10022/t2-pwa/pwa-react-template.git`
1. Change directory to template `cd pwa-react-template`
1. Run `npm install prompt; node t2-setup.js` to setup your package.json configuration. During the setup be sure to set the repository URL to your **NEW** project. This can be found on the project details when you first create your project in GitLab
1. Run `npm run setup` to install dependencies and clean the git repo.<br />
   - *You may need to connect to a network outside of the Enclave in order to download all dependencies that are not served via npm*
1. To make your project's name consistent, you might want to rename the directory from 'pwa-react-template' to something more meaningful
1. Lastly, set the git remote url for your new project
    - `git remote set-url origin <git-repo-url>`

*At this point you can run `npm start` to see the app at `http://localhost:3000`.*


> This template was shamelessly taken from [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) and repurposed for T2


## Updates
Please feel free to make updates to this README or any outdated configuration changes. This is a 'living document'