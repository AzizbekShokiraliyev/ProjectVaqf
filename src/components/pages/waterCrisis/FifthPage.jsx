const FifthPage = () => {
	return (
		<div className='w-full'>
			{/* Image Section */}
			<div>
				<img
					src='https://res.cloudinary.com/the-water-project/image/upload/c_fill,dpr_auto,q_auto:eco,w_auto,f_auto/site/riding_to_water_2018.jpg'
					alt='Riding to water'
					className='w-full object-cover'
				/>
			</div>

			{/* Text Section */}
			<div className='bg-[#9CBB52] text-white py-12 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<h3 className='text-xl md:text-xl leading-relaxed'>
						Your support trains and equips in-country teams who build and
						restore water points in Kenya, Uganda and Sierra Leone. Your gift
						funds local solutions to local problems, creating opportunity all
						along the way.
					</h3>
				</div>
			</div>
		</div>
	)
}

export default FifthPage
