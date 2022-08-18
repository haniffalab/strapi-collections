'use strict';

/**
 * url service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::url.url');
