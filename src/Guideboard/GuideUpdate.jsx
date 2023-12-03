// GuideUpdate.js

import React, { useState } from 'react';

function GuideUpdate() {
  // Use state to manage form input values
  const [name, setName] = useState('Manikantha Rayudu'); // Default name
  const [phoneNumber, setPhoneNumber] = useState('8093823499'); // Default phone number
  const [location, setLocation] = useState('city1'); // Default location
  const [language, setLanguage] = useState('Hindi, English, Marathi, Telugu, Tamil')

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add logic to update user information
    // For now, let's just log the values to the console
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Location:', location);
    console.log('Languages:', language);
    // You can send this information to your backend or perform other update actions
  };

  return (
    <div className="bg-white p-6 rounded flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6">Edit Profile</h2>
      {/* Form for updating user information */}
      <form onSubmit={handleSubmit}>
        <div className='flex gap-6'> 
          <div>
            {/* Name input */}
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="name" className="font-semibold">Name</label>
              <input
                className="border p-2 rounded-md"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="phoneNumber" className="font-semibold">Contact Number</label>
              <input
                className="border p-2 rounded-md"
                type="tel"  // Use type "tel" for phone numbers
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your contact no."
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"  // Example pattern for XXX-XXX-XXXX format
                required
              />
            </div>
          </div>
          <div>
            {/* Location input */}
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="location" className="font-semibold">Location:</label>
              <select
                className="border p-2 rounded-md"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                <option value="">Select your location</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Languages input */}
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="language" className="font-semibold">Language</label>
              <textarea
                className="border p-2 rounded-md"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Enter languages you speak"
                required
              />
            </div>
          </div>
        </div>
        {/* Submit button */}
        <div className="ml-[22rem] p-3">
          <button className="border p-3 rounded-md bg-[#4B6F44] text-white border-none hover:opacity-80 transition ease-in-out duration-700 font-semibold" type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
}

export default GuideUpdate;
