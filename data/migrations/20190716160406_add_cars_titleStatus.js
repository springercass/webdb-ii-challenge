exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.string("title-status");
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("title-status");
  });
};
