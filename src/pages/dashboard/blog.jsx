import { useState } from 'react';
import withAuth from './withAuth';   // Opsionale, sipas teje
import Layout from './layout/Layout';

function BlogDashboard() {
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sigurohemi që kemi title, paragraph, file
    if (!title || !paragraph || !file) {
      alert('Please fill all fields (title, paragraph, image).');
      return;
    }

    try {
      // Krijojmë FormData
      const formData = new FormData();
      formData.append('title', title);
      formData.append('paragraph', paragraph);
      // Emri: 'file', që të përputhet me back-end
      formData.append('file', file);

      // Bëjmë POST
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        alert('Blog post created successfully!');
        // Pastrojmë fushat
        setTitle('');
        setParagraph('');
        setFile(null);
      } else {
        alert('Error: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      console.error('Error uploading blog post:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <Layout>
      <div>
        <h1>Create a new Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Paragraph: </label>
            <textarea
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
            />
          </div>
          <div>
            <label>Image: </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                console.log('FILE CHOSEN =>', e.target.files[0]);
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </Layout>
  );
}

export default withAuth(BlogDashboard);
