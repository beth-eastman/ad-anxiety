// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  // TODO: change placeholder routes
  // TODO: Know NAME meaning of route

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('components/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/videos',
      name: 'videos',
      getComponent(nextState, cb) {
        import('components/VideosPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/assessment',
      name: 'assessments',
      getComponent(nextState, cb) {
        import('components/AssessmentPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/assessment/:assessmentId',
      name: 'assessmentsquiz',
      getComponent(nextState, cb) {
        // TODO: FIX URL
        import('components/Page')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/library',
      name: 'library',
      getComponent(nextState, cb) {
        import('components/LibraryPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/library/:libraryPageId',
      name: 'libraryInfo',
      getComponent(nextState, cb) {
        import('components/LibraryBook')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/resources',
      name: 'resources',
      getComponent(nextState, cb) {
        import('components/ResourcePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/resources/links',
      name: 'links',
      getComponent(nextState, cb) {
        import('components/Links')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/resources/books',
      name: 'books',
      getComponent(nextState, cb) {
        import('components/Books')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
    {
      path: '/resources/articles',
      names: 'articles',
      getComponent(nextState, cb) {
        import('components/Article')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/resources/facts/:factId',
      name: 'facts',
      getComponent(nextState, cb) {
        import('components/Facts')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    }, {
      path: '/apphub',
      name: 'app-hub',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/videos/:videoId',
      name: 'video',
      getComponent(nextState, cb) {
        import('components/Video')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
