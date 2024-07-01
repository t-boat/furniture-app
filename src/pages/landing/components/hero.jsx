import heroImage from '../../../assets/images/hero3.webp';

const Hero = () => {    
  return (
    <div className='flex h-screen'>

      <div className='w-1/2 flex bg-blue-100 items-center'>
      <div className='px-20'>
        <p className='font-light text-4xl'>Best Design of</p>

        <p className='text-5xl pt-1 font-bold'>Furniture Collections</p>

        <p className='w-[350px] py-2'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        
        <button className='bg-white py-[10px] px-[20px] rounded-full text-blue-600 font-bold'>DISCOVER</button>
      </div>
      </div>

      <div className='w-1/2'>
        <img src={heroImage} alt="" className='h-full w-full object-cover'/>
      </div>

    </div>
  );
};

export default Hero;