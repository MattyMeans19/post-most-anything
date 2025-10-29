
export default function Register(){
    return(
        <div className="backdrop h-[90vh] content-center">
            <form className="registration">
                <label htmlFor="fName">First Name: </label>
                <input type="text" id="fName"></input>
                <label htmlFor="lName">Last Name: </label>
                <input type="text" id="lName"></input>
                <label htmlFor="email">Email Address: </label>
                <input type="email" id="email"></input>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username"></input>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password"></input>
                <label htmlFor="dob">Date of Birth: </label>
                <input type="date" id="dob"></input>
                <button type="submit" className="submitButton col-start-2 col-span-2 w-[75%] justify-self-center">Submit</button>
            </form>  
        </div>
        
    )
}