import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export default class CertificationValidation {
  createCertification() {
    return [
      body('Id_Sertifikasi')
        .optional()
        .isString()
        .withMessage('Id Sertifikasi must be string')
        .bail(),
      body('Id_Pegawai')
        .exists()
        .withMessage('Must Have Id Pegawai')
        .isString()
        .withMessage('Id Pegawai must be string')
        .notEmpty()
        .withMessage('Id Pegawai can not be empty')
        .bail(),
      body('Id_Bidang')
        .exists()
        .withMessage('Must Have Id Bidang')
        .isString()
        .withMessage('Id Bidang must be string')
        .notEmpty()
        .withMessage('Id Bidang can not be empty')
        .bail(),
      body('NamaLembaga')
        .exists()
        .withMessage('Must Have Nama Lembaga')
        .isString()
        .withMessage('Nama Lembaga must be string')
        .notEmpty()
        .withMessage('Nama Lembaga can not be empty')
        .bail(),
      body('DokumentasiSertifikat')
        .exists()
        .withMessage('Must Have File dokumentasi sertifikat')
        .isString()
        .withMessage('File dokumentasi sertifikat must be string')
        .notEmpty()
        .withMessage('File dokumentasi sertifikat can not be empty')
        .bail(),
      this.validate
    ]
  }

  async validate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, message: errors.array() })
    }
    next()
  }
}
