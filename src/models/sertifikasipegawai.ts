import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sertifikasipegawaiAttributes {
  Id_Sertifikasi: string;
  Id_Pegawai: string;
  Id_Bidang: string;
  NamaLembaga: string;
  DokumentasiSertifikat: string;
  Created_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type sertifikasipegawaiPk = "Id_Sertifikasi";
export type sertifikasipegawaiId = sertifikasipegawai[sertifikasipegawaiPk];
export type sertifikasipegawaiOptionalAttributes = "Created_at" | "createdAt" | "updatedAt";
export type sertifikasipegawaiCreationAttributes = Optional<sertifikasipegawaiAttributes, sertifikasipegawaiOptionalAttributes>;

export class sertifikasipegawai extends Model<sertifikasipegawaiAttributes, sertifikasipegawaiCreationAttributes> implements sertifikasipegawaiAttributes {
  Id_Sertifikasi!: string;
  Id_Pegawai!: string;
  Id_Bidang!: string;
  NamaLembaga!: string;
  DokumentasiSertifikat!: string;
  Created_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sertifikasipegawai {
    return sertifikasipegawai.init({
    Id_Sertifikasi: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    Id_Pegawai: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'datapegawai',
        key: 'Id_Pegawai'
      }
    },
    Id_Bidang: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      references: {
        model: 'bidang',
        key: 'Id_Bidang'
      }
    },
    NamaLembaga: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    DokumentasiSertifikat: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sertifikasipegawai',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_Sertifikasi" },
        ]
      },
      {
        name: "Id_Pegawai",
        using: "BTREE",
        fields: [
          { name: "Id_Pegawai" },
        ]
      },
      {
        name: "Id_Bidang",
        using: "BTREE",
        fields: [
          { name: "Id_Bidang" },
        ]
      },
    ]
  });
  }
}
