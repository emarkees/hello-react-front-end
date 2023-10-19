import { useSelector } from 'react-redux'

const Greeting = () => {
const {randomGreeting, isLoading} = useSelector((store) => store.greetings)  


  return (
    <div>
     {isLoading ? <h1>Loading...</h1> : <h1>{randomGreeting.greetings}</h1>}
    </div>
  )
}

export default Greeting