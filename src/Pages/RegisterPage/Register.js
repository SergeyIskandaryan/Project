import React from "react";
import './Register.css'
import {useForm} from 'react-hook-form'

export default function Register(){
    const { register , handleSubmit } = useForm();
    const onSubmit = (data)=> console.log(data);
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("firstName")} type="text" placeholder="firstName"/>
                </div>
                <div>
                <input {...register("lastName")} type="text" placeholder="lastName"/>
                </div>
                <div>
                <input {...register("email")} type="email" placeholder="email"/>
                </div>
                <div>
                <input {...register("Pssword")} type="password" placeholder="password"/>
                </div>

                <input type="submit"/>
            </form>
        </div>
    )
}