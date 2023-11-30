import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export default class EmployeeValidation {
  createEmployee() {
    return [
      body('Id_Pegawai')
        .optional()
        .isString()
        .withMessage('Umur must be an string')
        .bail(),
      body('NamaLengkap')
        .exists()
        .withMessage('Nama Lengkap must be provided')
        .isString()
        .withMessage('Nama Lengkap must be string')
        .bail(),
      body('Tanggal')
        .exists()
        .withMessage('Tanggal must be provided')
        .isDate()
        .withMessage('Invalid date format')
        .bail(),
      body('Umur')
        .optional()
        .isInt()
        .withMessage('Umur must be an integer')
        .bail(),
      body('AlamatLengkap')
        .exists()
        .withMessage('Alamat lengkap must be provided')
        .isString()
        .withMessage('Alamat lengkap must be a string')
        .notEmpty()
        .withMessage('Alamat lengkap cannot be empty')
        .bail(),
      // body('Keahlian')
      //   .optional()
      //   .isArray()
      //   .withMessage('Keahlian must be an array')
      //   .custom((value: any) => {
      //     if (value && !Array.isArray(value)) {
      //       throw new Error('Keahlian must be an array')
      //     }
      //     return true
      //   })
      //   .bail(),
      body('LevelPekerjaan')
        .optional()
        .isString()
        .withMessage('Level pekerjaan must be a string')
        .bail(),
      body('Kd_Provinsi')
        .optional()
        .isString()
        .withMessage('Kode Provinsi must be a string')
        .bail(),
      body('Kd_KotaKabupaten')
        .optional()
        .isString()
        .withMessage('Kode Kota/Kabupaten must be a string')
        .bail(),
      body('Kodepos')
        .optional()
        .isString()
        .withMessage('Kodepos must be a string')
        .bail(),
      this.validate
    ]
  }

  updateEmployee() {
    return [
      body('Id_Pegawai')
        .optional()
        .isString()
        .withMessage('Umur must be an string')
        .bail(),
      body('NamaLengkap')
        .exists()
        .withMessage('Nama Lengkap must be provided')
        .isString()
        .withMessage('Nama Lengkap must be string')
        .bail(),
      body('Tanggal')
        .exists()
        .withMessage('Tanggal must be provided')
        .isDate()
        .withMessage('Invalid date format')
        .bail(),
      body('Umur')
        .optional()
        .isInt()
        .withMessage('Umur must be an integer')
        .bail(),
      body('AlamatLengkap')
        .exists()
        .withMessage('Alamat lengkap must be provided')
        .isString()
        .withMessage('Alamat lengkap must be a string')
        .notEmpty()
        .withMessage('Alamat lengkap cannot be empty')
        .bail(),
      body('LevelPekerjaan')
        .optional()
        .isString()
        .withMessage('Level pekerjaan must be a string')
        .bail(),
      body('Kd_Provinsi')
        .optional()
        .isString()
        .withMessage('Kode Provinsi must be a string')
        .bail(),
      body('Kd_KotaKabupaten')
        .optional()
        .isString()
        .withMessage('Kode Kota/Kabupaten must be a string')
        .bail(),
      body('Kodepos')
        .optional()
        .isString()
        .withMessage('Kodepos must be a string')
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
