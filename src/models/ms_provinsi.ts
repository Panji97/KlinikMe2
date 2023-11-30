import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ms_provinsiAttributes {
  Kd_Provinsi: number;
  NamaProvinsi?: string;
  Kd_Region?: string;
  Created_at?: string;
  Modified_at?: string;
  Delete_at?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ms_provinsiPk = "Kd_Provinsi";
export type ms_provinsiId = ms_provinsi[ms_provinsiPk];
export type ms_provinsiOptionalAttributes = "NamaProvinsi" | "Kd_Region" | "Created_at" | "Modified_at" | "Delete_at" | "createdAt" | "updatedAt";
export type ms_provinsiCreationAttributes = Optional<ms_provinsiAttributes, ms_provinsiOptionalAttributes>;

export class ms_provinsi extends Model<ms_provinsiAttributes, ms_provinsiCreationAttributes> implements ms_provinsiAttributes {
  Kd_Provinsi!: number;
  NamaProvinsi?: string;
  Kd_Region?: string;
  Created_at?: string;
  Modified_at?: string;
  Delete_at?: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ms_provinsi {
    return ms_provinsi.init({
    Kd_Provinsi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NamaProvinsi: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Kd_Region: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Modified_at: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Delete_at: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ms_provinsi',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Kd_Provinsi" },
        ]
      },
    ]
  });
  }
}
