import React from 'react'
import Header from '../components/Header';

function AboutUsPage(props) {
 
    const role =localStorage.getItem('Role');
    return (
   
    <>
        <Header role={role}/>
        <div>
        <div className='container-fluid'>
            <div className='container'>
                <div className='row p-2 border'>
                    <div className='col-md-6 text-center border pt-4' style={{background:"linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.2)),url('https://storage.needpix.com/rsynced_images/background-2359805_1280.jpg')"}}>
                        <img className='img-fluid rounded' width={"300"} src='https://static.wixstatic.com/media/7ecd54_f7fc04da67a74c48a4454f00faa40f8b~mv2.jpg/v1/fill/w_446,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7ecd54_f7fc04da67a74c48a4454f00faa40f8b~mv2.jpg' />
                        <h4>Er. Y V D CHANDRA SEKHAR</h4>
                        <h5>Founder & CEO , CS CODENZ</h5>
                        <h5>Data Analyst at CONIODO,USA</h5>
                    </div>
                    <div className='col-md-6 border'>
                        <div className='mx-4 text-center pb-4'>
                            <h4 className='mt-4'>Precious Message fromFounder & CEO</h4>
                            <p className='mt-5' style={{textAlign:"justify"}}>Our Aim is to Provides a Best Technical Knowledge with Low cost to all the Students who are looking for get professional in a Coding Skills along with Moral Values .The institution will continue to build its strength by developing world class teaching programmers at postgraduate and undergraduate levels in addition to pursuing research in cutting edge technologies.</p>
                            <p style={{textAlign:"justify"}}>Further, we are conscious of our social responsibility and will continue to carry out activities with direct social impact, such as school and undergraduate teachers training, development and dissemination of sustainable technologies, and research with direct relevance to society such as climate change, healthcare, water resources management, and renewable energy.</p>
                            <button className='btn btn-outline-dark'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <h2>Team</h2>
                    <h4>Dedication. Expertise. Passion.</h4>
                    <p className='mx-md-5'>This is your Team section. It's a great place to introduce your team and talk about what makes it special, such as your culture or work philosophy. Don't be afraid to illustrate personality and character to help users connect with your team.</p>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default AboutUsPage;