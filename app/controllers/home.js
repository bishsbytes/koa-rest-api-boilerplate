'use strict';

const pkginfo = require('../../package.json');
const spec = require('../spec');

/**
 * @swagger
 * /:
 *  get:
 *    description: Returns API information
 *    responses:
 *      200:
 *        description: Hello API
 */
exports.welcome = ctx => {
  // BUSINESS LOGIC
  const data = {
    name: pkginfo.name,
    version: pkginfo.version,
    description: pkginfo.description,
    author: pkginfo.author
  };

  ctx.res.ok(data, 'Hello, API!');
};

exports.showSwaggerSpec = ctx => {
  ctx.body = spec;
};
