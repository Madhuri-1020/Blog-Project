import { useState } from "react";
// import 'react-toastify/dist/ReactToastify.css';

function CreateBlog() {
    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');


    async function clickToSubmit(e) {
        e.preventDefault();
        const blogData = { topic, title, blogContent }
        console.log('blog', blogData);
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
            alert('please login')
        }
        try {
            const response = await fetch('https://blog-application-qiks.onrender.com/api/v1/blog/createNewBlog', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(blogData),
            });
            const result = await response.json();
            // console.log(result);
            if (result.ok) {
                alert('success')
            }else{
                alert('fail')
            }
        } catch (e) {
            alert(e.message)
        }
    }
    return (
       <div>
            <h1 className="text-center">Create Blog</h1>
            <form onSubmit={clickToSubmit}>
            <div className="m-5">
                <div class="mb-3">
                    <label for="disabledSelect" class="form-label">Topic</label>
                    <select id="disabledSelect"
                        class="form-select"
                        onChange={(e) => setTopic(e.target.value)}
                        value={topic}>
                        <option>Select a topic</option>
                        <option>JavaScript</option>
                        <option>ReactJS</option>
                        <option>NodeJS</option>
                        <option>ExpressJS</option>
                        <option>CSS</option>
                        <option>HTML</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title:</label>
                    <input type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Title of Blog"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Blog Content</label>
                    <textarea class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        onChange={(e) => setBlogContent(e.target.value)}
                        value={blogContent}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit"
                        class="btn btn-white col-3 mt-5"
                        style={{ backgroundColor: '#a580c7', height: '50px', fontSize: '20px' }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
        </div>
    )
}
export default CreateBlog;