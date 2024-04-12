import  {useState}  from "react";

const Authenticate = ({token,setLoggedIn}) => {
  const [success,setSuccess] = useState(null)
  const [error,setError] = useState(null)
  const handleClick = async (e) => {
  //token.preventDefault();
  
  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
      method : "Get",
      headers : {"Content-Type": "application/json", 
      Authorization: `Bearer ${token}`}
      
    })
    const json = await response.json();
      console.log(json);
      console.log("Message", json.message);
      setSuccess(json.message);
      if(json.success){
        setLoggedIn(true);
      }
    
  } catch (error) {
    setError(error.message)
    
    
  }

}

  return <>
 <section>
   <h2> Authenticate </h2>
   {success && <p>{success}</p> }
   {error && <p>{error}</p> }
   <button onClick={handleClick}> Authenticate Token </button>
 </section>

  
  
  
  </>
}
export default Authenticate;