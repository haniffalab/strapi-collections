'use strict';

/**
 * study router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRouter = createCoreRouter("api::study.study");

// function to add to or override default router methods
const customRouter = (innerRouter, routeOveride = [], extraRoutes = []) => {
    let routes;
  
    return {
      get prefix() {
        return innerRouter.prefix;
      },
      get routes() {
        if (!routes) routes = innerRouter.routes;
  
        const newRoutes = routes.map((route) => {
          let found = false;
  
          routeOveride.forEach((overide) => {
            if (
              route.handler === overide.handler &&
              route.method === overide.method
            ) {
              found = overide;
            }
          });
  
          return found || route;
        });
  
        return newRoutes.concat(extraRoutes);
      },
    };
  };

  const myOverideRoutes = []

  const myExtraRoutes = [
    {
      method: "GET",
      path: "/study/:slug",
      handler: "api::study.study.findOne",
    },
  ];

  
  module.exports = customRouter(defaultRouter, myOverideRoutes, myExtraRoutes);
  