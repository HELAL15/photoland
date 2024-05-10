'use strict';

/**
 * returns-policy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::returns-policy.returns-policy');
