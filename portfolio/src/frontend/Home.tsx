import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="backgroun-home" >
      <section >
        <div className='text-home'>
        <h1>UX:\UI Designer</h1>
        <h1>Frontend</h1>
        </div>
        <div className='text-home-body'>
        <p></p>
        </div>
        <div className="buttom">
           {/* ปุ่ม CTA (Call to Action) สำคัญมาก */}
          <Link to="/Experience">MY EXPERIANCE</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;