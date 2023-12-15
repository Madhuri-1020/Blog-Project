import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch('https://blog-application-qiks.onrender.com/api/v1/blog/allBlogs');
        const result = await response.json();
        console.log(result);
        setBlogs(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return  <div className="loader"></div>
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const contentLimit=(content,limit)=>{
    const words=content.split(" ");
    const trunctated=words.splice(0, limit).join(" ");
    return trunctated + (words.length > limit ? " ...!" : "");
  }

  return (
    <div className='container mt-2 mb-5'>

      <div className='row row-cols-1 row-cols-lg-3 row-cols-sm-1'>
        {blogs.map(blog=>(
          <div className='col mt-3'>
            <div className='p-3 border bg-light'>
              <img src={`https://source.unsplash.com/random?${blog.topic}`} alt="" className='image_blog'/>
              <p className='mt-1 author'>Author: {blog.user.name}</p>
              <span className='d-flex justify-content-between'>
                <h3>{contentLimit(blog.title, 2)}</h3>
                <h5 className='d-flex align-items-center justify-content-center topic-text'>Topic: {blog.topic}</h5>
              </span>
              <p>{contentLimit(blog.content,30)}</p>
              {/* <p>{blog.content}</p> */}
              <div className='text-center d-flex align-items-center justify-content-center'>
                <p className='read-button'>
                  Published Date:{' '}
                  {new Date(blog.createdAt).toLocaleDateString({
                    day:'numeric',
                    month:'numeric',
                    year:'numeric'
                  })}
                </p>
              </div>
              <span className='d-flex justify-content-between'>
              <Link to={`/blog/${blog._id}`}>
                  <button className='btn btn-white' style={{ backgroundColor: ' #a580c7', width: '20rem' }}>Read Full</button>
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Home;