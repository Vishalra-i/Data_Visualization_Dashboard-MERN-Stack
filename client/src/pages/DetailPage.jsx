import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const { storeData } = useSelector(state => state.server);
  const item = storeData.find(item => item._id === id);

  if (!item) {
    return <div className="text-center text-red-500 font-bold mt-10">Item not found</div>;
  }

  // Custom function for making the first letter capitalize
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="container mx-auto mt-6 p-6 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{item.title}</h1>
      <div className="space-x-5">
        <div className="flex flex-col">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Details</h2>
            <div className="mt-2 text-gray-600">
              <p><strong>Topic:</strong> {capitalizeFirstLetter(item.topic) || "Not Found"}</p>
              <p><strong>Published:</strong> {item.published || "Published Date Not Found"}</p>
              <p><strong>Country:</strong> {item.country || "Not Found"}</p>
              <p><strong>Region:</strong> {item.region || "Not Found"}</p>
              <p><strong>Sector:</strong> {item.sector || "Not Found"}</p>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Metrics</h2>
            <div className="mt-2 text-gray-600">
              <p><strong>Insight:</strong> {item.insight || "Not Found"}</p>
              <p><strong>Likelihood:</strong> {item.likelihood || "Not Found"}</p>
              <p><strong>Impact:</strong> {item.impact || 0}</p>
              <p><strong>Start Year:</strong> {item.start_year || "Data not found"}</p>
              <p><strong>End Year:</strong> {item.send_year || "Data not found"}</p>
            </div>
          </div>
        </div>
      
          <a
            href={item.url} 
            className="text-white font-semibold my-5 w-20 bg-blue-500 hover:bg-blue-300 py-2 px-4 rounded-md text-sm " 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read more
          </a>
      
      </div>
    </div>
  );
}

export default DetailPage;
