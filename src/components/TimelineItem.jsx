import React from 'react';

const TimelineItem = ({ year, title, duration, details }) => {
	return (
		<ol className="flex flex-col md:flex-row relative border-l border-stone-600">
			<li className="mb-10 ml-4">
				<div className="absolute w-3 h-3 bg-stone-500 rounded-full mt-1.5 -left-1.5 border border-white" />
				<p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
					<span className="inline-block px-2 py-1 font-semibold text-white bg-stone-800 rounded-md">
						{year}
					</span>
					<h3 className="text-lg font-semibold text-stone-900">{title}</h3>
					<div className="my-1 text-sm font-medium leading-none px-2 py-1 text-stone-800 bg-stone-200 rounded-full">
						{duration}
					</div>
				</p>
				<p className="my-2 text-base font-normal text-stone-700">{details}</p>
			</li>
		</ol>
	);
};

export default TimelineItem;
