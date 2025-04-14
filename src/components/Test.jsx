import { useState, useEffect } from 'react';

export default function Test() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // Marrim të dhënat me GET
    fetch('/api/admin/blog') 
      .then((res) => {
        if (!res.ok) {
          // Nëse API kthen p.sh. status 500, 404, etj.
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setErrorMsg('Failed to load blog posts');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading blog posts...</div>;
  }

  if (errorMsg) {
    return <div style={{ color: 'red' }}>{errorMsg}</div>;
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p>{post.paragraph}</p>
            
            {/* Nëse ka imageUrl, shfaq imazhin */}
            {post.imageUrl && (
              <div>
                <img 
                  src={`/${post.imageUrl}`} // p.sh. /blog/myimage.jpg
                  alt={post.title}
                  style={{ maxWidth: '300px' }} 
                />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
