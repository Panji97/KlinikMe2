import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface keahlianAttributes {
  id: number;
  value: string;
  Id_Pegawai: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type keahlianPk = "id";
export type keahlianId = keahlian[keahlianPk];
export type keahlianOptionalAttributes = "id" | "createdAt" | "updatedAt";
export type keahlianCreationAttributes = Optional<keahlianAttributes, keahlianOptionalAttributes>;

export class keahlian extends Model<keahlianAttributes, keahlianCreationAttributes> implements keahlianAttributes {
  id!: number;
  value!: string;
  Id_Pegawai!: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof keahlian {
    return keahlian.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Id_Pegawai: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'datapegawai',
        key: 'Id_Pegawai'
      }
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
      {
        name: "Id_Pegawai",
        using: "BTREE",
        fields: [
          { name: "Id_Pegawai" },
        ]
      },
    ]
  });
  }
}
