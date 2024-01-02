import React, { useState } from 'react';

function Profile() {
  const [loggedIn, setLoggedIn] = useState('');

  const handleButtonClick = () => {
    // Assuming the input value should be a string representing the logged-in user.
    // For example, if you input "1" in the text box, it will set loggedIn to "1".
    setLoggedIn(loggedIn);
  };

  return (
    <div>
      <input
        value={loggedIn}
        name="name"
        onChange={(e) => setLoggedIn(e.target.value)}
        type="text"
      />
      <button onClick={handleButtonClick}>check</button>
      {loggedIn === '1' ? (
        <h1>Hello Raj</h1>
      ) : loggedIn === '2' ? (
        <h1>Hello Aarati</h1>
      ) : (
        <h1>Hello Prince</h1>
      )}
    </div>
  );
}

export default Profile;
