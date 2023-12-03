import { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      const url = 'http://localhost:3000/blogs';

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  });

  return (
    <div>
      {/* Category section */}
      <div>Page Category</div>
      {/* BlogCards section */}
      <div>
        <BlogCards blogs={blogs} />
      </div>
      {/* Pagination section */}
      <div>Pagination</div>
    </div>
  );
};

export default BlogPage;
