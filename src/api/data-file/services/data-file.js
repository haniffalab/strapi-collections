'use strict';

/**
 * data-file service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-file.data-file');
