import React from 'react';
import Title from './Title';

const Contact = () => {
	return (
		<div className="flex flex-col mb-10 mx-auto">
			<div className="flex justify-center items-center">
				<form
					action="https://getform.io/f/4e54fbe5-af04-4e46-92d8-1a7465ab8236"
					method="POST"
					className="flex flex-col w-full md:w-7/12 "
				>
					<Title>Contact</Title>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="p-2 bg-transparent border-2 rounded-md focus:outline-none "
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none "
					/>
					<textarea
						name="message"
						placeholder="Message"
						rows="10"
						className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
					/>
					<button
						type="button"
						className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-600 to-pink-600 drop-shadow-md hover:stroke-white"
					>
						Надтай холбогдоорой
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
