export async function up(pool) {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL
      );
    `;
    
    await pool.query(createTableQuery);
  }
  export async function down(pool) {
    const dropTableQuery = `DROP TABLE IF EXISTS users;`;
    await pool.query(dropTableQuery);
  }
  