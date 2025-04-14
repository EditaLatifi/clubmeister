import bcrypt from 'bcrypt';

export async function up(pool) {
  const passwordUser = await bcrypt.hash('user123', 10);
  const passwordAdmin = await bcrypt.hash('admin123', 10);
  const passwordSuperadmin = await bcrypt.hash('superadmin12d3', 10);

  const insertQuery = `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`;

  await pool.query(insertQuery, ['user','granitsalihu2', passwordUser, 'user']);
  await pool.query(insertQuery, ['admin','granitsalihu3', passwordAdmin, 'admin']);
  await pool.query(insertQuery, ['superadmin','granitsalihu4', passwordSuperadmin, 'superadmin']);
}

export async function down(pool) {
  await pool.query(`DELETE FROM users WHERE username IN ('user','admin','superadmin')`);
}
