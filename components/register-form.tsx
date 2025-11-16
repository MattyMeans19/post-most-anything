'use client';
import { useActionState } from "react";
import { CreateUser } from "@/actions/user-actions";

export default function RegistrationForm(){
    const [formState, formAction] = useActionState(CreateUser, undefined);

    return(
        <div className="backdrop h-[90vh] content-center">
            <form className="registration" action={formAction}>
                <label htmlFor="fName">First Name: </label>
                <input type="text" id="fName" name="fName" maxLength={20} pattern="[A-Za-z ]+" required></input>
                <label htmlFor="lName">Last Name: </label>
                <input type="text" id="lName" name="lName" maxLength={20} pattern="[A-Za-z ]+" required></input>
                <label htmlFor="email">Email Address: </label>
                <input type="email" id="email" name="email" maxLength={30} required></input>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" maxLength={20} required></input>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" maxLength={20} autoComplete="off" required></input>
                <label htmlFor="dob">Date of Birth: </label>
                <input type="date" id="dob" name="dob" required></input>
                {formState?.message && <p className="w-full text-center col-span-full text-3xl text-red-500">{formState.message}</p>}
                <button type="submit" className="submitButton col-start-2 col-span-2 w-[75%] justify-self-center">Submit</button>
            </form>  
        </div>
    )
}