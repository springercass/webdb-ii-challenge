exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.string("transmission-type");
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("transmission-type");
  });
};
