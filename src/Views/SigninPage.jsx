import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

//import components
import Label from '../Components/Label'
import InputField from '../Components/InputField'
import Button from '../Components/Button';

function SigninPage() {

    const navigate = useNavigate()

    const { register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            email_field: "",
            pass_field: ""
        },
    });

    const email = watch("email_field");
    const pass = watch("pass_field");

    const signinPagess = (e) => {
        e.preventDefault();

        if (email.length === 0 || pass.length === 0) {
            toast.error("Please Enter Email and Password..")
        }
        else {
            
            navigate("/account")
        }
    }
    return (
        <>
            <div className='h-screen w-screen  flex justify-center items-center '>

                <div className='border border-gray-100 min-h-min w-[350px] p-2 bg-[#f7f8f9]'>
                    <div className='pl-2 w-2/3 mt-5'>
                        <p className='text-2xl font-bold '>Siginin to your PopX account</p>
                    </div>

                    <div className='my-1 text-gray-400 w-2/3 pl-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <form onSubmit={signinPagess}>
                        <div className='my-1 text-gray-400 w-full pl-2 '>
                            <div className=''>
                                <div className='relative'>
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
                            </div>
                        </div>

                        <div className='w-full p-1   mt-10 mb-5 sm:mt-11 '>
                            {
                                (Object.entries(errors).length > 0) ? (
                                    <Button name="login"
                                        disabled={true}
                                        hover={true}
                                        // onClick={() => { signinPagess }}
                                        className="!px-5 !py-2 !rounded-lg !w-full !bg-[#6c25ff]"
                                    />)
                                    : (
                                        <Button name="login"
                                            disabled={false}
                                            hover={true}
                                            // onClick={() => { signinPagess }}
                                            className="!px-5 !py-2 !rounded-lg !w-full !bg-[#6c25ff]"
                                        />
                                    )
                            }
                        </div>

                        <div className='h-[30vh]'>

                        </div>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        </>
    )
}

export default SigninPage