import Logo from '../Assets/logo_image.png';

function Footer() {
  return (

    <div>
      <footer className='text-center text-lg-start bg-body-tertiary'>
        <div className='d-flex justify-content-center justify-content-lg-between border-bottom p-3'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get Connected With us on social networks:</span>
          </div>
          <div>
            <a href="" className='text-decoration-none text-reset'> <i class="fa-brands fa-instagram icons p-3" ></i></a>
            <a href="" className='text-decoration-none text-reset'><i class="fa-brands fa-linkedin icons p-3"></i></a>
            <a href="" className='text-decoration-none text-reset'> <i class="fa-brands fa-github icons p-3"></i></a>
          </div>
        </div>
        <section>
          <div className='container text-center text-md-start mt-4'>
            <div className='row'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='fw-bold mb-4'>
                  <img src={Logo} alt="" className='w-25 h-25' />
                  CCS TECH </h6>
                <p>Where Tech Meets Tomorrow, We Lead the Way. innovate, Elevate, and Inspire, Crafting Solutions That Redefine the Digital Landscape and Propel Success</p>
              </div>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='mb-4 fw-bold'>PRODUCTS</h6>
                <p>Web Development</p>
                <p>Android Development</p>
                <p>Education</p>
                <p>Finserv</p>
              </div>
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='mb-4 fw-bold'>USEFUL LINKS</h6>
                <p>Create Blog</p>
                <p>Contact</p>
                <p>About</p>
                <p>Home</p>
              </div>
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='mb-4 fw-bold'>CONTACT</h6>
                <p><i class="fa-solid fa-house-laptop"></i>
                  <a href="" className='text-decoration-none text-reset'> #10, Bengaluru-Honnavar Rd, Sagara, karnataka 577401</a></p>
                <p><i class="fa-regular fa-envelope"></i>
                  <a href="mailto:madhuri@gmail.com" className='text-decoration-none text-reset'>madhurimadaka@gmail.com</a></p>
                <p><i class="fa-solid fa-phone"></i>
                  <a href="tel:+91 1234567890" className='text-decoration-none text-reset'> +91 1234567890</a></p>
              </div>
            </div>
          </div>
        </section>
        <div className='text-center p-4 copyrights'>&copy; 2023 Copyright: <b>MADHURI MADAKA</b></div>
      </footer>
    </div >







    // <div>
    //   <div className='bg-light mt-5 pt-3'>

    //   <div className='row bg-body-tertiary' style={{height:'85px'}}>
    //      <div className='col'>
    //       <p style={{ paddingTop:'22px'}} className='text-container'>Get connect with us on social media networks:
    //       </p>
    //       </div> 
    //      <div className='col justify-content-end'>
    //      <i class="fa-brands fa-instagram icons p-3" ></i>
    //      <i class="fa-brands fa-linkedin icons p-3"></i>
    //      <i class="fa-brands fa-github icons p-3"></i> 
    //      </div>
    //     </div>

    //     <div className='container bg-light'>
    //       <footer className='row gap-3'>
    //         <div className='col'>
    //           <h4><span><img src={Logo} alt="" className='image' /></span>CCS TECH</h4>
    //          <p>Where tech Meets Tomorrow, We Lead the Way. Innovate, Elevate, and Inspire, Crafting Solutions tha Redefine the Digital Landscape and Propel Success</p>
    //         </div>
    //         <div className='col'>
    //           <h4>PRODUCTS</h4>
    //           <ul class="list-unstyled">
    //             <li>Web Development</li>
    //             <li>Android Development</li>
    //             <li>Education</li>
    //             <li>Finserv</li>
    //           </ul>
    //         </div>
    //         <div className='col'>
    //           <h4>USEFUL LINKS</h4>
    //           <ul class="list-unstyled">
    //             <li>Create Blog</li>
    //             <li>Contact</li>
    //             <li>About</li>
    //             <li>Home</li>
    //           </ul>
    //         </div>
    //         <div className='col'>
    //           <h4>CONTACT</h4>
    //           <ul class="list-unstyled">
    //             <li><i class="fa-solid fa-house-laptop"></i>
    //               #10, Bengaluru-Honnavar Rd, Sagara, karnataka 577401</li>
    //             <li><i class="fa-regular fa-envelope"></i>
    //               madhurimadaka@gmail.com</li>
    //             <li><i class="fa-solid fa-phone"></i>
    //               +91 1234567890</li>
    //           </ul>
    //         </div>
    //       </footer>
    //     </div><br />
    //     <div className='text-center'>
    //       <p>&copy; 2023 Copyright:<b> MADHURI MADAKA</b></p>
    //     </div>

    //   </div>
    // </div>
  )
}

export default Footer;