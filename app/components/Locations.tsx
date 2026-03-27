'use client';

import React from 'react';

const Locations = () => {
  return (
    <div className=" flex justify-center">
      <div className="w-full  h-[60vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.500075695375!2d150.9636940395654!3d-33.813268629925396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a2bb3e19a337%3A0x9aa151b026486fa6!2s77%20Garfield%20St%2C%20Wentworthville%20NSW%202145%2C%20Australia!5e1!3m2!1sen!2slk!4v1752849539038!5m2!1sen!2slk"
          width="100%"
          height="100%"
          className=" w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Locations;
