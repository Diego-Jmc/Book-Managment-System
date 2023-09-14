CREATE TABLE roles (
    id serial PRIMARY KEY,
    description VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    creation_date TIMESTAMP DEFAULT current_timestamp,
    role_id INT,
    CONSTRAINT fk_role_id
        FOREIGN KEY (role_id)
        REFERENCES roles (id)
);


CREATE TABLE genders (
    id serial PRIMARY KEY,
    description VARCHAR(100) NOT NULL
);

CREATE TABLE editorials (
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100)
);

CREATE TABLE books (
    id serial PRIMARY KEY,
    isbn VARCHAR(13) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    sinopsis TEXT,
    fk_gender_id INT,
    image_url VARCHAR(255),
    stock INT,
    fk_editorial_id INT,
    release_date DATE,
    CONSTRAINT fk_gender_id
        FOREIGN KEY (fk_gender_id)
        REFERENCES genders(id),
    CONSTRAINT fk_editorial_id
        FOREIGN KEY (fk_editorial_id)
        REFERENCES editorials(id)
);

CREATE TABLE book_loans (
    id serial PRIMARY KEY,
    fk_book_id INT,
    fk_user_id INT,
    loan_date DATE,
    expiration_date DATE,
    CONSTRAINT fk_book_id
        FOREIGN KEY (fk_book_id)
        REFERENCES books(id),
    CONSTRAINT fk_user_id
        FOREIGN KEY (fk_user_id)
        REFERENCES users(id)
);


CREATE TABLE reviews (
    id serial PRIMARY KEY,
    fk_user INT,
    fk_book INT,
    commentary TEXT,
    stars INT,
    CONSTRAINT fk_user
        FOREIGN KEY (fk_user)
        REFERENCES users(id),
    CONSTRAINT fk_book
        FOREIGN KEY (fk_book)
        REFERENCES books(id)
);
