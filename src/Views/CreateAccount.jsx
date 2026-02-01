import React from 'react'

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

//import components
import Button from '../Components/Button'
import InputField from '../Components/InputField'
import Label from '../Components/Label'



function CreateAccount() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            fullname: "",
            mobile_no_field: "",
            email_field: "",
            pass_field: "",
            companyname: ""
        },
    });

    // watches live changes
    // const fullname = watch("fullname");
    // console.log(fullname)


    return (
        <>
            <div className='h-screen w-screen  flex justify-center items-center '>

                <div className='border border-gray-100 min-h-min w-[350px] p-2 bg-[#f7f8f9]'>
                    <div className='pl-2 w-1/2 mt-5'>
                        <p className='text-2xl font-bold '>Create your PopX account</p>
                    </div>
                    <div className='my-1 text-gray-400 w-full pl-2 '>
                        <div className=''>
                            <div className='relative'>
                                <Label title="Full Name" className="absolute " />
                                <InputField
                                    className=""
                                    type="text"
                                    name="fullname"
                                    {...register("fullname", {
                                        required: "fullname is required",
                                        pattern: {
                                            value: /^(?:[A-Z][a-z]*)(?:\s[A-Z][a-z]*)*$/,
                                            message: "Capitalize each word,letters/spaces only",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "Max 30 chars",
                                        },
                                    })}
                                />
                                {errors?.fullname && (
                                    <span className="text-red-500 text-sm w-5/6 absolute left-2 -bottom-5 ">
                                        {errors?.fullname?.message}
                                    </span>
                                )}
                            </div>

                            <div className='relative mt-5'>
                                <Label title="Phone Number" className="absolute left-10  " />
                                <InputField
                                    className=""
                                    type="number"
                                    {...register("mobile_no_field", {
                                        required: "Mobile number is required.",
                                        pattern: {
                                            value: /^[6-9]\d{9}$/, // For Indian numbers: starts with 6-9, total 10 digits
                                            message: "Enter a valid number.",
                                        },
                                    })}

                                />
                                {errors?.mobile_no_field && (
                                    <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                                        {errors?.mobile_no_field?.message}
                                    </span>
                                )}
                            </div>

                            <div className='relative mt-5'>
                                <Label title="Email Address" className="absolute  " />
                                <InputField
                                    className=""
                                    name="email"
                                    {...register("email_field", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                                            message: "Enter a valid email",
                                        },
                                    })}
                                />
                                {errors?.email_field && (
                                    <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                                        {errors?.email_field?.message}
                                    </span>
                                )}
                            </div>

                            <div className='relative mt-5'>
                                <Label title="Password" className="absolute  " />
                                <InputField
                                    className=""
                                    type="password"
                                    name="pass_field"
                                    {...register("pass_field", {
                                        required: "Password is required.",

                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: "Invalid password format",
                                        },
                                    })}
                                />
                                {errors?.pass_field && (
                                    <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                                        {errors?.pass_field?.message}
                                    </span>
                                )}
                            </div>

                            <div className='relative mt-5 mb-5'>
                                <Label title="Company Name" className="absolute  " />
                                <InputField className=""

                                    type="text"
                                    name="companyname"
                                    {...register("companyname", {
                                        required: "Company Name is required",
                                        pattern: {
                                            value: /^(?:[A-Z][a-z]*)(?:\s[A-Z][a-z]*)*$/,
                                            message: "Capitalize each word,letters/spaces only",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "Max 30 chars",
                                        },
                                    })}
                                />
                                {errors?.companyname && (
                                    <span className="text-red-500 text-sm w-5/6 absolute left-2 -bottom-5 ">
                                        {errors?.companyname?.message}
                                    </span>
                                )}
                            </div>

                            <div className='relative mt-5 mb-5'>
                                <Label title="Are you an Agency" />
                                <label>
                                    <input type="radio" name="agency" value="yes" />
                                    Yes
                                </label>

                                <label>
                                    <input type="radio" name="agency" value="no" />
                                    No
                                </label>
                            </div>

                        </div>
                    </div>

                    {/* <div className='mt-5 mb-8 flex justify-center items-center'>
                        <Button name="create account" className="!bg-[#6c25ff] rounded-sm w-[95%]" />
                    </div> */}

                    <div className='w-full p-1   mt-10 mb-5 sm:mt-11 '>
                        {
                            (Object.entries(errors).length > 0) ? (
                                <Button name="create account"
                                    disabled={true}
                                    hover={true}
                                    onClick={() => { navigate('/account') }}
                                    className="!px-5 !py-2 !rounded-lg !w-full !bg-[#6c25ff]"
                                />)
                                : (
                                    <Button name="create account"
                                        disabled={false}
                                        hover={true}
                                        onClick={() => { navigate('/account') }}
                                        className="!px-5 !py-2 !rounded-lg !w-full !bg-[#6c25ff]"
                                    />
                                )
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default CreateAccount