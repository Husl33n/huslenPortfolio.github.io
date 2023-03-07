import React from 'react';

const intro = () => {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-4xl mb:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Хүслэн</h1>
			<p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
			<p className="text-sm max-w-xl mb-6 font-bold">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique doloremque eos incidunt beatae dicta
				animi! Ducimus inventore reprehenderit officia incidunt quas sunt corporis cupiditate enim totam mollitia
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita deleniti, ut sint mollitia in
				totam! Optio et officia quis.{' '}
				<a
					href="#"
					target="_blank"
					className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
					rel="ksl-Portfolio"
				>
					ksl-Portfolio
				</a>{' '}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum.
			</p>
		</div>
	);
};

export default intro;
