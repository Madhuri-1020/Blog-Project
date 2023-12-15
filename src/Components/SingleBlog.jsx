import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleBlog() {
  const { blogId } = useParams(); // Get the blogId from the route parameter
  const [singleBlog, setSingleBlog] = useState([]);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const respo = await fetch(`https://blog-application-qiks.onrender.com/api/v1/blog/singleblog/${blogId}`);
        const resu = await respo.json();

        // Assuming the 'data' property contains the array of blogs
        const blogData = Array.isArray(resu.data) ? resu.data : [resu.data];
        setSingleBlog(blogData);
        console.log(resu);
      } catch (error) {
        setErr(error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, [blogId]);

  return (
    <div>
      {singleBlog.map((snglblg) => (
        <div key={snglblg._id}>
          <div>
            <img src={`https://source.unsplash.com/random?${snglblg.topic}`} alt="" className='image_snglblg' />
          </div>
          <div>
            <h4 className='d-flex align-tem-center justify-content-center single_title p-3'>{snglblg.title}</h4>
            <div className=' text-center d-flex align-items-center justify-content-center'>
            <h6 className='single_date p-3'>
              Published on:{' '}
              {new Date(snglblg.createdAt).toLocaleDateString({
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              })}
            </h6>
            </div>
            <p className='ps-4 pe-4 ms-3 me-3'>{snglblg.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SingleBlog;
