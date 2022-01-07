import React from 'react'

const ContactCard = () => {
    return (
        <div className='flex justify-center items-center h-full w-full'>
            <div className='rounded-2xl bg-zinc-100 w-5/6 h-5/6 p-4 shadow-xl shadow-gray-700'>
                <h1 className=' flex font-bold text-lg md:text-2xl justify-center align-middle'>Contactame a traves de alguno de estos medios</h1>
                <div className='flex justify-around items-center h-full w-full'>
                    <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 place-items-center relative h-5/6 w-5/6 ">
                        <div className="bg-amber-600 w-full h-4/6 lg:h-2/6">
                            twitter
                        </div>
                        <div className="bg-amber-600 w-full h-4/6 lg:h-2/6">
                            Gmail
                        </div>
                        <div className="bg-amber-600 w-full h-4/6 lg:h-2/6">
                            Linkedin
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ContactCard
