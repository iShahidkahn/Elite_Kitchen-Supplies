import Image from 'next/image'

const Titlebar = () => {
    return (
        <div>
            <Image src="/images/about_us_title.svg" width={0} height={0} alt="title" className='w-full' />
        </div>
    )
}

export default Titlebar