import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../Redux/GreetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const { randomGreeting, isLoading } = useSelector((store) => store.greetings);

  return (
    <div>
      {isLoading ? <h1>Loading...</h1> : <h1>{randomGreeting.greetings}</h1>}
    </div>
  );
};

export default Greeting;
