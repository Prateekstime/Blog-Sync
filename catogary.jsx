import React, { useEffect, useState } from 'react';


const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../public/data.json');
         
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError('Cannot fetch data');
        console.error("error: ",error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='overflow-auto '>
     
     
      <div className="p-4 w-auto  flex flex-row flex-nowrap bg-black">
        {data.map((item) => (
          <div className='w-64 h-80 rounded-xl bg-grey-900' key={item.id}>
            <p>{error}</p>
            
            <img src={item.image} alt={item.title} />
            <h2 className='text-blue-400'>{item.title}</h2>
            <p className='p-4 ml-10 text-sm'>{item.description}</p>

          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Card;
