import path from 'path'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import { sertifikasipegawaiAttributes } from '../../models/sertifikasipegawai'
import database from '../../models'

export default class CertificationService {
  public async createCertification(data: sertifikasipegawaiAttributes) {
    try {
      const latestCertificateId = await database.sertifikasipegawai.count()
      const newCertificateIdNumber = latestCertificateId + 1
      const formattedCertificateId = `P${newCertificateIdNumber.toString().padStart(3, '0')}`

      await database.sertifikasipegawai.create({
        Id_Sertifikasi: data.Id_Sertifikasi ? data.Id_Sertifikasi : formattedCertificateId,
        Id_Pegawai: data.Id_Pegawai,
        Id_Bidang: data.Id_Bidang,
        NamaLembaga: data.NamaLembaga,
        DokumentasiSertifikat: data.DokumentasiSertifikat,
        Created_at: new Date()
      })

      return { message: 'Success create Sertifikasi Pegawai', result: null }
    } catch (error) {
      throw error
    }
  }

  public async showCertification() {
    try {
      const CERTIFICATION_DATA = await database.sertifikasipegawai.findAll()

      if (!CERTIFICATION_DATA) {
        return { message: 'Data not found', result: null }
      }

      return { message: true, result: CERTIFICATION_DATA }
    } catch (error) {
      throw error
    }
  }

  public async deleteCertification(paramsId: string) {
    try {
      await database.sertifikasipegawai.destroy({
        where: {
          Id_Sertifikasi: paramsId
        }
      })

      return { message: 'Success delete sertification', result: null }
    } catch (error) {
      throw error
    }
  }
}
