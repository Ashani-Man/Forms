import  {useState}  from "react";

const Authenticate = () => {
  const [success,setSuccess] = useState(null)
  const [error,setError] = useState(null)
const handleClick = async (token) => {
  token.preventDefault();
  //console.log(" ")
  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
      method : "Get",
      headers : {"Content-Type": "application/json", 
      Authorization: `Bearer ${token}`}
      
    })
    const result = await response.json()
    setSuccess(result.message)

    console.log(json)

    
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