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
						<h4 className='text-[#2D6484] text-lg font-medium mb-1'>Natija</h4>
						<h1 className='text-4xl font-bold text-[#2D6484] mb-1'>40+</h1>
						<h6 className='text-sm text-[#2D6484]'>Quduqlar Qazildi</h6>
					</div>

					{/* Monitoring */}
					<div className='bg-[#EAF2F7] rounded-lg p-6 shadow-md'>
						<h4 className='text-[#2D6484] text-lg font-medium mb-1'>
							Hozirda
						</h4>
						<h1 className='text-4xl font-bold text-[#2D6484] mb-1'>2,261</h1>
						<h6 className='text-sm text-[#2D6484]'>Nafar odamlar Suv Bilan ta'minlangan</h6>
					</div>

					{/* Status */}
					<div className='bg-[#EAF2F7] rounded-lg p-6 shadow-md'>
						<h4 className='text-[#2D6484] text-lg font-medium mb-1'>Holat</h4>
						<h1 className='text-4xl font-bold text-[#2D6484] mb-1'>97%</h1>
						<h6 className='text-sm text-[#2D6484]'>Loyihalar Muvaqqiyati</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SixthMain
