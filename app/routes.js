/*
 * routes.js
 * A list of all avaiable paths in the application
 *
 * Created by Bethany Eastman on 06/21/17.
 *
 * AD Anxiety
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * Government Agency Original Software Designation: ProductName001
 * Government Agency Original Software Title: ProductName
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
 *
*/

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
      path: '/assessments',
      name: 'assessments',
      getComponent(nextState, cb) {
        import('components/AssessmentPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/assessments/:assessmentId',
      name: 'assessmentsquiz',
      getComponent(nextState, cb) {
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
