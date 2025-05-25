import dotenv from 'dotenv';
dotenv.config(); // carga el .env

export const BASE_URL = process.env['BASE_URL'] as string;
