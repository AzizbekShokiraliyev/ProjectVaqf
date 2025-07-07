import img1 from '../../../assets/firstImage.jpg'

const projects = [
	{
		title: 'Shiyunzu Health Center',
		country: 'Kenya',
		image: img1,
		progress: 20,
		needed: '$28,336',
		description:
			'Provide a borehole well and hand pump to help at least 54 people find access to safe and reliable water.',
		link: '#',
	},
	{
		title: 'Makempitha Community',
		country: 'Sierra Leone',
		image: img1,
		progress: 1,
		needed: '$29,588',
		description:
			'Provide a borehole well and hand pump to help at least 347 people find access to safe and reliable water.',
		link: '#',
	},
	{
		title: 'Makempitha DEC Primary School',
		country: 'Sierra Leone',
		image: img1,
		progress: 12,
		needed: '$26,346',
		description:
			'Provide a borehole well and hand pump to help at least 193 people find access to safe and reliable water.',
		link: '#',
	},
	{
		title: 'Itoloni Girls Secondary School',
		country: 'Kenya',
		image: img1,
		progress: 31,
		needed: '$25,287',
		description:
			'Provide a rainwater catchment to help at least 514 people find access to safe and reliable water.',
		link: '#',
	},
]

const EighthMain = () => {
	return (
		<div className='px-6 py-12'>
			<h2 className='text-3xl font-semibold text-center text-gray-800 mb-10'>
				Choose Who to Help
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='bg-white shadow-md rounded-lg overflow-hidden flex flex-col'
					>
						<img
							src={project.image}
							alt={project.title}
							className='w-full h-48 object-cover'
						/>
						<div className='relative w-full bg-gray-200 h-3'>
							<div
								className='absolute top-0 left-0 h-3 bg-blue-600'
								style={{ width: `${project.progress}%` }}
							></div>
							<span className='absolute left-2 text-white text-xs font-bold top-[-20px]'>
								{project.progress}%
							</span>
						</div>
						<div className='px-4 py-4 flex flex-col flex-grow'>
							<div className='text-right text-gray-600 text-sm mb-2'>
								{project.needed} still needed
							</div>
							<h3 className='text-lg font-semibold text-gray-800'>
								{project.title}
							</h3>
							<p className='text-sm text-gray-500 mb-2'>{project.country}</p>
							<p className='text-sm text-gray-700 mb-4 flex-grow'>
								{project.description}
							</p>
							<p className='text-xs text-gray-400 mb-4'>Planned for 2025</p>
							<a
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'
								className='mt-auto bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-2 px-4 rounded text-center'
							>
								Help this Community
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default EighthMain
