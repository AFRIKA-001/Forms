import { useRef } from "react";

export default function Login() {
  const formRef = useRef();
  // const passwordRef= useRef();

function handleSubmit(e){
  e.preventDefault();
  //get the value of email and password from the input fields using useRef

  // const email = emailRef.current.value;
  // const password = passwordRef.current.value;
  // console.log({email:email,password:password});

//  emailRef.current.value="";
//  passwordRef.current.value="";

 const formData = new FormData(e.target);
 const data =  Object.fromEntries(formData.entries());
 console.log(data);


//Resetting the form using the  reset() method connected using useRef
 if(formRef.current){
  formRef.current.reset();
 }

}
  

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"  />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
