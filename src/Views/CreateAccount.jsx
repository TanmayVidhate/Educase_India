import React from 'react'

import Button from '../Components/Button'

function CreateAccount() {
    return (
        <>
            <div className='h-screen w-screen  flex justify-center items-center '>

                <div className='border border-gray-100 min-h-min w-[350px] p-2 bg-[#f7f8f9]'>
                    <div className='pl-2 w-1/2'>
                        <p className='text-2xl font-bold '>Create your PopX account</p>
                    </div>
                    <div className='my-1 text-gray-400 w-2/3 pl-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='mt-5 flex justify-center items-center'>
                        <Button name="create account" className="!bg-[#6c25ff] rounded-sm w-[95%]" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default CreateAccount