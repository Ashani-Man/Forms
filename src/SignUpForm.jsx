import  {useState}  from "react";


const SignUpForm = () => {
  const [username, setusername] = useState(" ");
  const [password, setpassword] = useState(" ");
  const [error, seterror] = useState(null);
  
  const  handleSubmit =  async (event) => {
    event.preventDefault();
    try {
       const response =  await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({

        })
      
      })
      const result =  await response.json();
      console.log(result)
      setToken(result.token);
      
  
    } catch (error) {
      seterror(error.message)

      
    }
  }

  return <><h2> Sign Up Now</h2>
   {error && <p>{error}</p> }
 
  <form action="" onSubmit={handleSubmit}>    
    <p>
      <input type="text" value={username}  onChange={(e) =>  setusername(e.target.value) }/> <br />
     <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}/> <br />
    </p>
    <button>submit</button>
  </form>
  
  </>
  
  
}
export default SignUpForm;