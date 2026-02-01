import React from 'react'


//import components
import Label from '../Components/Label'
import InputField from '../Components/InputField'
import Button from '../Components/Button';

function AccountSettings() {
    return (
        <>
            <div className='h-screen w-screen  flex justify-center items-center '>

                <div className='border border-gray-100 min-h-min w-[350px] p-2 bg-[#f7f8f9]'>
                    <div className='pl-2 w-1/2 mt-5'>
                        <p className='text-xl font-medium '>Account Settings</p>
                    </div>

                    <div className='mt-5 flex justify-start items-start gap-10'>
                        <div className=''>
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt='image' className='h-20 w-20 object-cover rounded-full' />
                        </div>

                        <div className=''>
                            <p className='text-sm font-bold'>Marry Doe</p>
                            <p className='text-sm'>marray@gmail.com</p>
                        </div>
                    </div>

                    <div className='mt-5' >
                        <p className='pl-2 text-sm text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, eveniet. Incidunt aperiam quos rerum odio</p>
                    </div>

                    <div className='h-[50vh]'>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AccountSettings