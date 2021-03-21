import React from "react";
import NavBar from '../shared-components/NavBar/NavBar';

function Contact() {
  return (
    <div>
      <NavBar />
      <h1 className='text-3xl text-center text-white'>Contact</h1>
        <address className='block max-w-md m-5 mx-auto text-white'>
          <p>
            Phone number: <b>0123456789</b> 
          </p>
          <p>
            Email us <a href="mailto:ashutoshbw314@gmail.com">Here</a>
          </p>
        </address>
    </div>
  );
}

export default Contact;
