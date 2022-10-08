import React from 'react'

function Footer() {
  return (
    <>
        <hr style={{background:"blue",padding:"1px"}} />
        <footer className='py-4'>
            <div className='container'>
                <div className='row row-cols-3 align-items-center justify-content-center'>
                    <div className='col'>
                        <h5>CS CODENZ</h5>
                    </div>
                    <div className='col'>
                        <h6>Top Courses</h6>
                        <ul>
                            <li>PYTHON</li>
                            <li>SQL</li>
                            <li>WEB DEVELOPMENT</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h6>Contact Us</h6>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Whatsapp</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;