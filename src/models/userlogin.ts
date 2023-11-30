import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface userloginAttributes {
  Id_User: string;
  Email: string;
  Username: string;
  Password: string;
  Token?: string;
  Created_at?: Date;
  Modified_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type userloginPk = "Id_User";
export type userloginId = userlogin[userloginPk];
export type userloginOptionalAttributes = "Token" | "Created_at" | "Modified_at" | "createdAt" | "updatedAt";
export type userloginCreationAttributes = Optional<userloginAttributes, userloginOptionalAttributes>;

export class userlogin extends Model<userloginAttributes, userloginCreationAttributes> implements userloginAttributes {
  Id_User!: string;
  Email!: string;
  Username!: string;
  Password!: string;
  Token?: string;
  Created_at?: Date;
  Modified_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof userlogin {
    return userlogin.init({
    Id_User: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING(23),
      allowNull: false,
      unique: "Username"
    },
    Password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Modified_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userlogin',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_User" },
        ]
      },
      {
        name: "Username",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Username" },
        ]
      },
    ]
  });
  }
}
