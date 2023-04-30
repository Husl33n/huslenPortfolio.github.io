import React from 'react';

const Footer = () => {
	return (
		<div className="py-5 text-center">
			<p className="text-sm text-stone-700">
				&copy; {new Date().getFullYear()} Хүслэн Бямбахүү. All rights reserved
			</p>
		</div>
	);
};

export default Footer;
