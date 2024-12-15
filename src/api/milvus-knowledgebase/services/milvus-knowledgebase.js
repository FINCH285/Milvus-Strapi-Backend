'use strict';

/**
 * milvus-knowledgebase service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::milvus-knowledgebase.milvus-knowledgebase');
