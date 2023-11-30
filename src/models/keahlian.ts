import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface keahlianAttributes {
  id: number;
  name: string;
  Created_at?: Date;
  Updated_at?: Date;
}

export type keahlianPk = "id";
export type keahlianId = keahlian[keahlianPk];
export type keahlianOptionalAttributes = "id" | "Created_at" | "Updated_at";
export type keahlianCreationAttributes = Optional<keahlianAttributes, keahlianOptionalAttributes>;

export class keahlian extends Model<keahlianAttributes, keahlianCreationAttributes> implements keahlianAttributes {
  id!: number;
  name!: string;
  Created_at?: Date;
  Updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof keahlian {
    return keahlian.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'keahlian',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
