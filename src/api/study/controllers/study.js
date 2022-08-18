'use strict';

/**
 *  study controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::study.study", ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
  
      const query = {
        filters: { slug },
        ...ctx.query,
      };
  
      const study = await strapi.entityService.findMany("api::study.study", query);
  
    //   const sanitizedEntity = await this.sanitizeOutput(study);
  
      return this.transformResponse(study[0]);
    },
  }));