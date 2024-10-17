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
    <div>
     
     
      <div className=" ">
        {data.map((item) => (
          <div className='flex justify-betweenp-2 m-2 rounded-xl bg-gray-900' key={item.id}>
            <p>{error}</p>
            
            <img src={item.images} alt={item.title} />
            <h2 className='text-blue-400'>{item.title}</h2>
            <p className='p-4 ml-10 text-sm'>{item.description}</p>

          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Card;
