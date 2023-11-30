import type { Sequelize } from "sequelize";
import { bidang as _bidang } from "./bidang";
import type { bidangAttributes, bidangCreationAttributes } from "./bidang";
import { datapegawai as _datapegawai } from "./datapegawai";
import type { datapegawaiAttributes, datapegawaiCreationAttributes } from "./datapegawai";
import { ms_kota as _ms_kota } from "./ms_kota";
import type { ms_kotaAttributes, ms_kotaCreationAttributes } from "./ms_kota";
import { ms_provinsi as _ms_provinsi } from "./ms_provinsi";
import type { ms_provinsiAttributes, ms_provinsiCreationAttributes } from "./ms_provinsi";
import { sertifikasipegawai as _sertifikasipegawai } from "./sertifikasipegawai";
import type { sertifikasipegawaiAttributes, sertifikasipegawaiCreationAttributes } from "./sertifikasipegawai";
import { userlogin as _userlogin } from "./userlogin";
import type { userloginAttributes, userloginCreationAttributes } from "./userlogin";

export {
  _bidang as bidang,
  _datapegawai as datapegawai,
  _ms_kota as ms_kota,
  _ms_provinsi as ms_provinsi,
  _sertifikasipegawai as sertifikasipegawai,
  _userlogin as userlogin,
};

export type {
  bidangAttributes,
  bidangCreationAttributes,
  datapegawaiAttributes,
  datapegawaiCreationAttributes,
  ms_kotaAttributes,
  ms_kotaCreationAttributes,
  ms_provinsiAttributes,
  ms_provinsiCreationAttributes,
  sertifikasipegawaiAttributes,
  sertifikasipegawaiCreationAttributes,
  userloginAttributes,
  userloginCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const bidang = _bidang.initModel(sequelize);
  const datapegawai = _datapegawai.initModel(sequelize);
  const ms_kota = _ms_kota.initModel(sequelize);
  const ms_provinsi = _ms_provinsi.initModel(sequelize);
  const sertifikasipegawai = _sertifikasipegawai.initModel(sequelize);
  const userlogin = _userlogin.initModel(sequelize);

  sertifikasipegawai.belongsTo(bidang, { as: "Id_Bidang_bidang", foreignKey: "Id_Bidang"});
  bidang.hasMany(sertifikasipegawai, { as: "sertifikasipegawais", foreignKey: "Id_Bidang"});
  sertifikasipegawai.belongsTo(datapegawai, { as: "Id_Pegawai_datapegawai", foreignKey: "Id_Pegawai"});
  datapegawai.hasMany(sertifikasipegawai, { as: "sertifikasipegawais", foreignKey: "Id_Pegawai"});
  ms_kota.belongsTo(ms_provinsi, { as: "Kd_Provinsi_ms_provinsi", foreignKey: "Kd_Provinsi"});
  ms_provinsi.hasMany(ms_kota, { as: "ms_kota", foreignKey: "Kd_Provinsi"});

  return {
    bidang: bidang,
    datapegawai: datapegawai,
    ms_kota: ms_kota,
    ms_provinsi: ms_provinsi,
    sertifikasipegawai: sertifikasipegawai,
    userlogin: userlogin,
  };
}
