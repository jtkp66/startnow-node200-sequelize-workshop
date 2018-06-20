'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    authorId: { type: DataTypes.INTEGER, required: false, defaultValue: 0},
    title: { type: DataTypes.STRING, required: true}, 
    article: { type: DataTypes.TEXT, required: true},
    featured: { type: DataTypes.BOOLEAN, required: true}, 
    published: { type: DataTypes.DATE, required: true}
  }, {});
    Blog.associate = function(models) {
          // associations can be defined here
          models.Blog.belongsTo(models.Author, {foreignKey: 'authorId'});
        };
    // classMethods: {
    //   associate: function(models) {
    //     models.Blog.belongsTo(models.Author, {as: 'authors', foreignKey: 'firstName', targetKey: 'id'});

    //   }
    // }
  
  return Blog;
};


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Blog = sequelize.define('Blog', {
//     authorId: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     article: DataTypes.TEXT,
//     featured: DataTypes.BOOLEAN,
//     published: DataTypes.DATE,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {});
//   Blog.associate = function(models) {
//     // associations can be defined here
//     models.Blog.belongsTo(models.Author, {foreignKey: 'authorId'});
//   };
//   return Blog;
// };
