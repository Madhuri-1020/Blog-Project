import '../Components/StyeleFooter.css'
function Contact() {
    return (
        <div className='justify-content-center align-items-center d-flex'>
      <div className='contact_page bg-white p-5 m-5'>
      <form>
        <h2 className="text-center htext">Contact Us</h2>
        <div className='mb-2 mt-3'>
          <label htmlFor="text" className='htext'>Name:</label>
          <input type="text"  className='form-control contact_input mt-3 mb-5'/>
        </div>
        <div className='mb-2 mt-3'>
          <label htmlFor="email" className='htext'>Email:</label>
          <input type="text"  className='form-control contact_input mt-3 mb-5' />
        </div>
        <div className='mb-2 mt-3'>
          <label htmlFor="text" className='htext'>Phone Number:</label>
          <input type="text"  className='form-control contact_input mt-3 mb-5'/>
        </div>
        <div className='mb-2 mt-3'>
          <label htmlFor="text" className='htext'>Message:</label>
          <input type="text"  className='form-control contact_input mt-3 mb-5'/>
        </div>
        <div className='d-grid mt-4'>
          <button className='btn btn-white contact_input contact_submit' style={{color:'black', backgroundColor:'#a580c7'}}>Submit</button>
        </div>
      </form>
      </div>
    </div>
    )
}
export default Contact;