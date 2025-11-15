'use client';
import { useActionState } from "react";
import { CreateUser } from "@/actions/user-actions";

export default function RegistrationForm(){
    const [formState, formAction] = useActionState(CreateUser, undefined);

    return(
        <div className="backdrop h-[90vh] content-center">
            <form className="registration" action={formAction}>
                <label htmlFor="fName">First Name: </label>
                <input type="text" id="fName" name="fName" pattern="[a-z][A-Z]{}" required></input>
                <label htmlFor="lName">Last Name: </label>
                <input type="text" id="lName" name="lName" pattern="[a-z][A-Z]" required></input>
                <label htmlFor="email">Email Address: </label>
                <input type="email" id="email" name="email" required></input>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" required></input>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" required></input>
                <label htmlFor="dob">Date of Birth: </label>
                <input type="date" id="dob" name="dob" required></input>
                <button type="submit" className="submitButton col-start-2 col-span-2 w-[75%] justify-self-center">Submit</button>
            </form>  
        </div>
    )
}