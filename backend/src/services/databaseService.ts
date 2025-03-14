import { Client } from 'pg';

export const createDatabase = async (dbName: string) => {
  const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
  });

  try {
    await client.connect();
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log(`Base de datos ${dbName} creada correctamente`);
  } catch (error) {
    console.error("Error al crear la base de datos:", error);
  } finally {
    await client.end();
  }
};