import { useState } from "react";

export default function Login() {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: ""
    }); 

const [didEdit , setDidEdit]=useState({
    email:false,
    password:false
})


const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

function handleSubmit(event){
  event.preventDefault();
  setEnteredValues({
    email: "",
    password: ""
  })
  console.log(enteredValues);
}

function handleEmailChange(identifier){
    setDidEdit(prevValues=>({
        ...prevValues,
        [identifier]: true
     
    }))
}
function handlePasswordChange(identifier,value){
    setEnteredValues(prevValues=>({
        ...prevValues,
        [identifier]: value
    }))
}
function handleBlurChange(identifier,value){
    setEnteredValues(prevValues=>({
        ...prevValues,
        [identifier]:value
    }))
    setDidEdit((prevState)=>({
    ...prevState,
    [identifier]: false
  }))

}
  

  return (
    <form  onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>handleEmailChange('email',event.target.value)}/>
        <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address that does include an "@" symbol.</p> }
        </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>handlePasswordChange('password',event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
