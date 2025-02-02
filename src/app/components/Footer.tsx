import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white w-full p-6 border-t">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 max-w-7xl mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-primary500">MORENT</h1>
          <p className="mt-2 text-sm text-gray-500">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            {
              title: 'About',
              items: ['How it works', 'Featured', 'Partnership', 'Business Relation'],
            },
            {
              title: 'Community',
              items: ['Events', 'Blog', 'Podcast', 'Invite a friend'],
            },
            {
              title: 'Socials',
              items: ['Discord', 'Instagram', 'Twitter', 'Facebook'],
            },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="font-bold">{section.title}</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col lg:flex-row justify-between items-center gap-4 border-t pt-4">
        <p>©2024 MORENT. All rights reserved.</p>
        <div className="flex space-x-6 text-sm">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

