'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PokemonCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokemonCard.init({
    name: DataTypes.STRING,
    hp:DataTypes.STRING,
    typeimage:DataTypes.STRING,
    pokemonimage:DataTypes.STRING,
    movetype:DataTypes.STRING,
    movename:DataTypes.STRING,
    movepower:DataTypes.STRING,
    movetype2:DataTypes.STRING,
    movename2:DataTypes.STRING,
    movepower2:DataTypes.STRING,
    resdesc:DataTypes.STRING,
    resistance:DataTypes.STRING,
    weakdesc:DataTypes.STRING,
    weakness:DataTypes.STRING,
    retdesc:DataTypes.STRING,
    retreat:DataTypes.STRING,
    words:DataTypes.STRING,
    color:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'PokemonCard',
    tableName: 'pokemoncard',
    timestamps: false,
  });
  return PokemonCard;
};