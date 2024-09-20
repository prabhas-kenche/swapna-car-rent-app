import React from 'react';
import './index.css';

const RecentBlogs = () => {
  return (
    <div className="blog pt-5 pb-5">
      <div className='text-center'>
        <h1 className='about'>Our Blog Recent</h1>
        <h1 className='about'>Articles</h1>
      </div>
      <div className="card-container d-flex flex-row justify-contect-center">
        <div className="card">
          <img src="https://autozone-theme.com/lux/wp-content/uploads/2016/10/Tourneo_Courier_Bursting_Green_007.webp" alt="green-car" />
          <h1 className="card-heading">Ford Tourneo Courier Review</h1>
          <p>Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t midst said dominion in.</p>
          <hr />
          <div className="date-container">
            <h1 className='card-heading'>19</h1>
            <p>October, 2016</p>
          </div>
          <hr />
        </div>

        <div className="card">
          <img src="https://autozone-theme.com/lux/wp-content/uploads/2016/09/audi_r8_gt_5-wide.jpg" alt="red-car" />
          <h1 className="card-heading">Ford Tourneo in Blue</h1>
          <p>Fourth form likeness divided first light it. Male be. Shall, saying there over fruit rule fill brought him moving waters. Lesser. Given sea thing. Fly god void lights second called greater them that seas set spirit. Light fruit.</p>
          <hr />
          <div className="date-container">
            <h1 className='card-heading'>15</h1>
            <p>October, 2016</p>
          </div>
          <hr />
        </div>

        <div className="card">
          <img src="https://autozone-theme.com/lux/wp-content/uploads/2016/09/Black-lamborghini-back-view-hd-wallpapers-1080p-cars.jpg" alt="black car" />
          <h1 className="card-heading">Ford Tourneo Black Edition</h1>
          <p>Over fifth wherein fourth fifth living rule. Sixth divide saying, land behold in dominion rule signs be whose air place sea firmament fish itself unto male heaven under.</p>
          <hr />
          <div className="date-container">
            <h1 className='card-heading'>10</h1>
            <p>October, 2016</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;