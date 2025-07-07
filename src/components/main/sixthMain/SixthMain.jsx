const SixthMain = () => {
	return (
		<div className='w-full py-12 px-4 md:px-12'>
			<div className='mx-auto text-center'>
				<div className='w-full h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-200'>
					<iframe
						title='Uzbekistan Map'
						src='https://www.openstreetmap.org/export/embed.html?bbox=55.0,36.0,74.0,46.5&layer=mapnik'
						className='w-full h-full'
						loading='lazy'
					></iframe>
				</div>
			</div>
			<div className='bg-white py-12 px-4 md:px-16'>
				<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
					{/* Impact */}
					<div className='bg-[#EAF2F7] rounded-lg p-6 shadow-md'>
						<h4 className='text-[#2D6484] text-lg font-medium mb-1'>Impact</h4>
						<h1 className='text-4xl font-bold text-[#2D6484] mb-1'>901,250</h1>
						<h6 className='text-sm text-[#2D6484]'>People Today</h6>
					</div>

					{/* Monitoring */}
					<div className='bg-[#EAF2F7] rounded-lg p-6 shadow-md'>
						<h4 className='text-[#2D6484] text-lg font-medium mb-1'>
							Currently Monitoring
						</h4>
						<h1 className='text-4xl font-bold text-[#2D6484] mb-1'>2,261</h1>
						<h6 className='text-sm text-[#2D6484]'>Water Points</h6>
					</div>

					{/* Status */}
					<div className='bg-[#EAF2F7] rounded-lg p-6 shadow-md'>
						<h4 className='text-[#2D6484] text-lg font-medium mb-1'>Status</h4>
						<h1 className='text-4xl font-bold text-[#2D6484] mb-1'>97%</h1>
						<h6 className='text-sm text-[#2D6484]'>Water Flowing</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SixthMain
