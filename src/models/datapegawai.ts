import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface datapegawaiAttributes {
  Id_Pegawai: string;
  NamaLengkap: string;
  Tanggal: string;
  Umur: number;
  AlamatLengkap: string;
  Keahlian?: string;
  LevelPekerjaan: string;
  Kd_Provinsi: string;
  Kd_KotaKabupaten: string;
  Kodepos: string;
  Created_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type datapegawaiPk = "Id_Pegawai";
export type datapegawaiId = datapegawai[datapegawaiPk];
export type datapegawaiOptionalAttributes = "Keahlian" | "Created_at" | "createdAt" | "updatedAt";
export type datapegawaiCreationAttributes = Optional<datapegawaiAttributes, datapegawaiOptionalAttributes>;

export class datapegawai extends Model<datapegawaiAttributes, datapegawaiCreationAttributes> implements datapegawaiAttributes {
  Id_Pegawai!: string;
  NamaLengkap!: string;
  Tanggal!: string;
  Umur!: number;
  AlamatLengkap!: string;
  Keahlian?: string;
  LevelPekerjaan!: string;
  Kd_Provinsi!: string;
  Kd_KotaKabupaten!: string;
  Kodepos!: string;
  Created_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof datapegawai {
    return datapegawai.init({
    Id_Pegawai: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    NamaLengkap: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    Tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Umur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AlamatLengkap: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    Keahlian: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LevelPekerjaan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Kd_Provinsi: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Kd_KotaKabupaten: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    Kodepos: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'datapegawai',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_Pegawai" },
        ]
      },
    ]
  });
  }
}
