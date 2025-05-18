import { decrement, increment } from "@/Redux/Features/CounSlice";
import type { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";

const CounterPage = () => {
          
  
   const dispatch = useDispatch();


//  Button Event Handler
  const handleIncrement = () =>{


    dispatch(increment());

  } 
  const handleDecrement = () => {

    dispatch(decrement());

  }

  
//   REDUX DOC :
    const counter = useSelector((state: RootState) => state.counter.value);





  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400  via-blue-300 to-pink-300">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center w-80">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Task Counters</h1>
        <h2 className="text-5xl font-extrabold text-indigo-600 mb-6">{counter}</h2>
        <div className="flex justify-between items-center gap-6">
          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold py-2 px-5 rounded-lg transition duration-300 shadow-md"
          >
            −
          </button>
          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-2 px-5 rounded-lg transition duration-300 shadow-md"
          >
            ＋
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
