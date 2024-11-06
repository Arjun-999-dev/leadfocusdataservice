import React from 'react';

const About = () => {
  return (
    <div className='w-full min-h-screen bg-slate-200'>
    <div className='mt-96 ml-36 mr-52 '>
      <h1 className='text-6xl font-bold mb-12'>About Us</h1>
      <div className='flex justify-start gap-30 flex-wrap'>
        
        <div className='w-2/3 h-96'> 
        <div className='w-96 h-96'>
          <h3 className='text-2xl font-bold'>Dedicated to Relationships, Responsiveness, and Results</h3>
          <p className='m-2 mb-4 leading-relaxed mt-8 text-lg'> 
          LEAD FOCUS DATA SERVICE AR is a pioneer in providing online corporate information globally. 
            With each passing year, we strive to bring innovation and new services that enhance customer satisfaction. 
            Today, we offer exclusive digital services for corporate information and an online platform for branding among elite business visitors. 
            Our team consists of dedicated professionals with a passion for success.
          </p>
          </div> 
          <div className='w-96 h-96 mt-6'> 
          <h3 className='text-2xl font-bold'>We Keep Our Focus on Driving Results</h3>
          <p className='mb-4 leading-relaxed mt-8 text-lg'> 
            More than just a workplace, our clients are always our top priority. 
            We believe in fostering an environment that promotes positivity and collaboration. 
            Building a strong company culture is essential to us. 
            We strive to replace complaints with solutions, turn challenges into opportunities, 
            and bring energy and creativity to every project we undertake.
          </p>
          </div> 
        </div>
        <div className='w-96'>
          <div className='mt-0 mb-4'>
            <img src='US1.jpg' alt='About Image 1' className='ml-96 object-cover  w-full h-full' />
          </div>
          <div className=''>
            <img src='US3.jpg' alt='About Image 2' className='ml-96 object-cover w-full h-full' />
          </div>
          <div>
            <img src='US2.jpg' alt='About Image 3' className='object-cover w-full h-full' />
          </div>
          <div className='mb-96'></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
