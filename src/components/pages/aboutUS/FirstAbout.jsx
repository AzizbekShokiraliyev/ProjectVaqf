import img1 from '../../../assets/Banner_Image.jpg'
import img2 from '../../../assets/effects-all.jpg'

const FirstAbout = () => {
	return (
		<div className='w-full'>
			<div>
				<img
					src={img1}
					alt='About Us Banner'
					className='w-full h-auto object-cover'
				/>
			</div>

			<div className='max-w-3xl mx-auto text-center px-4 py-10'>
				<h1 className='text-4xl md:text-5xl font-bold text-[#425563] mb-6'>
					About Us
				</h1>

				<p className='text-[#111111] text-base md:text-lg mb-6'>
					The Water Project, Inc. is a 501(c)(3) non-profit organization
					unlocking human potential by providing reliable water projects to
					communities in sub-Saharan Africa who suffer needlessly from a lack of
					access to clean water and proper sanitation.
				</p>

				<p className='text-[#111111] text-base md:text-lg'>
					Since 2006, we have been helping communities gain access to clean,
					safe water by providing training, expertise, and financial support for
					water project construction through our staff and implementing
					partners.
				</p>
			</div>

			<div
				className='w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center'
				style={{ backgroundImage: `url(${img2})` }}
			>
				<p className='bg-black/30 text-white text-center px-6 py-4 text-2xl md:text-4xl font-semibold max-w-4xl'>
					The water crisis is real. It’s affecting women, children, families and
					farmers.
				</p>
			</div>
		</div>
	)
}

export default FirstAbout
