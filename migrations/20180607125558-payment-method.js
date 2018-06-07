'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  let done = function() { console.log('db up done!')};
  
  db.createTable('payment_method', {
    id: {
               type: 'int',
               primaryKey: true
             },
               full_name: {type: 'string', 
               length: 40       }, 
             dob: { 
               type: 'date'  
                  },      
                email: {
                  type: 'string',
                  length: 50 
                 }
                      
               }, done);
              };


exports.down = function(db) {
  db.dropTable('payment_method')
};

exports._meta = {
  "version": 1
};
