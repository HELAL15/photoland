'use strict';

/**
 * returns-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::returns-policy.returns-policy');
