import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  // Get all database information from ormconfig.json
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      // If the environment variable passed is equal to 'test' use 'jestTest' database
      database: process.env.NODE_ENV === 'test' ? 'jestTest' : defaultOptions.database,
    }),
  );
};
