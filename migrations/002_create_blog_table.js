// migrations/002_create_blog_posts.js
export async function up(pool) {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        paragraph TEXT NOT NULL,
        imageUrl VARCHAR(255) NULL
      );
    `);
  }
  