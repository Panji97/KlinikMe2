import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ms_kotaAttributes {
  Kd_Kota: number;
  Kd_Provinsi?: number;
  NamaKota?: string;
  Created_at?: string;
  Modified_at?: string;
  Delete_at?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ms_kotaPk = "Kd_Kota";
export type ms_kotaId = ms_kota[ms_kotaPk];
export type ms_kotaOptionalAttributes = "Kd_Provinsi" | "NamaKota" | "Created_at" | "Modified_at" | "Delete_at" | "createdAt" | "updatedAt";
export type ms_kotaCreationAttributes = Optional<ms_kotaAttributes, ms_kotaOptionalAttributes>;

export class ms_kota extends Model<ms_kotaAttributes, ms_kotaCreationAttributes> implements ms_kotaAttributes {
  Kd_Kota!: number;
  Kd_Provinsi?: number;
  NamaKota?: string;
  Created_at?: string;
  Modified_at?: string;
  Delete_at?: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ms_kota {
    return ms_kota.init({
    Kd_Kota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Kd_Provinsi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ms_provinsi',
        key: 'Kd_Provinsi'
      }
    },
    NamaKota: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    Modified_at: {
      type: DataTypes.STRING(23),
      allowNull: true
    },
    Delete_at: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ms_kota',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Kd_Kota" },
        ]
      },
      {
        name: "Kd_Provinsi",
        using: "BTREE",
        fields: [
          { name: "Kd_Provinsi" },
        ]
      },
    ]
  });
  }
}
