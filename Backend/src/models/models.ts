import { Model, DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

// Modelo para la tabla 'roles'
class Role extends Model {
  public id!: number;
  public description!: string;
}

export function initRole(sequelize: Sequelize): void {
  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Role',
      tableName: 'roles',
      timestamps: false, // Deshabilita timestamps
    }
  );
}

// Modelo para la tabla 'users'
class User extends Model {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public role_id!: number;
  public created_at!: Date; // Agrega created_at solo a este modelo
}

export function initUser(sequelize: Sequelize): void {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true, // Habilita timestamps solo para este modelo
      updatedAt: false, // Deshabilita updatedAt solo para este modelo
    }
  );
}

// Modelo para la tabla 'genders'
class Gender extends Model {
  public id!: number;
  public description!: string;
}

export function initGender(sequelize: Sequelize): void {
  Gender.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Gender',
      tableName: 'genders',
      timestamps: false, // Deshabilita timestamps
    }
  );
}

// Modelo para la tabla 'editorials'
class Editorial extends Model {
  public id!: number;
  public name!: string;
  public location!: string;
}

export function initEditorial(sequelize: Sequelize): void {
  Editorial.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(100),
      },
    },
    {
      sequelize,
      modelName: 'Editorial',
      tableName: 'editorials',
      timestamps: false, // Deshabilita timestamps
    }
  );
}

// Modelo para la tabla 'books'
class Book extends Model {
  public id!: number;
  public isbn!: string;
  public name!: string;
  public sinopsis!: string;
  public fk_gender_id!: number;
  public image_url!: string;
  public stock!: number;
  public fk_editorial_id!: number;
  public release_date!: Date;
}

export function initBook(sequelize: Sequelize): void {
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      isbn: {
        type: DataTypes.STRING(13),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      sinopsis: {
        type: DataTypes.TEXT,
      },
      fk_gender_id: {
        type: DataTypes.INTEGER,
      },
      image_url: {
        type: DataTypes.STRING(255),
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      fk_editorial_id: {
        type: DataTypes.INTEGER,
      },
      release_date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'books',
      timestamps: false, // Deshabilita timestamps
    }
  );
}

// Modelo para la tabla 'book_loans'
class BookLoan extends Model {
  public id!: number;
  public fk_book_id!: number;
  public fk_user_id!: number;
  public loan_date!: Date;
  public expiration_date!: Date;
}

export function initBookLoan(sequelize: Sequelize): void {
  BookLoan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_book_id: {
        type: DataTypes.INTEGER,
      },
      fk_user_id: {
        type: DataTypes.INTEGER,
      },
      loan_date: {
        type: DataTypes.DATE,
      },
      expiration_date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'BookLoan',
      tableName: 'book_loans',
      timestamps: false, // Deshabilita timestamps
    }
  );
}

// Modelo para la tabla 'reviews'
class Review extends Model {
  public id!: number;
  public fk_user!: number;
  public fk_book!: number;
  public commentary!: string;
  public stars!: number;
}

export function initReview(sequelize: Sequelize): void {
  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_user: {
        type: DataTypes.INTEGER,
      },
      fk_book: {
        type: DataTypes.INTEGER,
      },
      commentary: {
        type: DataTypes.TEXT,
      },
      stars: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews',
      timestamps: false, // Deshabilita timestamps
    }
  );
}
