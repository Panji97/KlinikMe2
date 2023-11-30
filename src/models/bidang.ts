import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface bidangAttributes {
  Id_Bidang: string;
  NamaBidang: string;
  Created_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type bidangPk = "Id_Bidang";
export type bidangId = bidang[bidangPk];
export type bidangOptionalAttributes = "Created_at" | "createdAt" | "updatedAt";
export type bidangCreationAttributes = Optional<bidangAttributes, bidangOptionalAttributes>;

export class bidang extends Model<bidangAttributes, bidangCreationAttributes> implements bidangAttributes {
  Id_Bidang!: string;
  NamaBidang!: string;
  Created_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof bidang {
    return bidang.init({
    Id_Bidang: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    NamaBidang: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bidang',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_Bidang" },
        ]
      },
    ]
  });
  }
}
