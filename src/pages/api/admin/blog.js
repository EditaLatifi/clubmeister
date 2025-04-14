import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';
import { BlogModel } from '../../../../models/BlogModel.js';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = promisify((req, form, callback) => {
  form.parse(req, (err, fields, files) => {
    callback(err, { fields, files });
  });
});
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const uploadDir = path.join(process.cwd(), 'public', 'blog');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      const form = formidable({
        multiples: false,
        keepExtensions: true,
        uploadDir,           
        maxFileSize: 10 * 1024 * 1024,  // 10 MB
      });
      const { fields, files } = await parseForm(req, form);
      const { title, paragraph } = fields;

      let imageUrl = null;
      const uploadedFile = files.file;
      if (uploadedFile) {
      
       const oldPath = uploadedFile.path; // Formidable 1.x
      
        const originalFilename = uploadedFile.originalFilename || 'uploaded.jpg';
        const newPath = path.join(uploadDir, originalFilename);
        fs.renameSync(oldPath, newPath);
        imageUrl = path.join('blog', originalFilename);
      }

      // 8. Ruajmë rekord në DB
      await BlogModel.create({ title, paragraph, imageUrl });

      return res.status(201).json({ message: 'Blog post created successfully!' });
    } catch (error) {
      console.error('Upload error:', error);
      return res.status(500).json({ error: error.message });
    }
  }
  else if (req.method === 'GET') {
    try {
      const posts = await BlogModel.list();
      return res.status(200).json(posts);
    } catch (err) {
      console.error('Blog GET error:', err);
      return res.status(500).json({ error: err.message });
    }
  }
  else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
