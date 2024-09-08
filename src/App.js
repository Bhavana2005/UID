// App.js
import React from "react";
import UserProfile from "./UserProfile";

const App = () => {
  const userData = {
    name: "BHAVANA V",
    age: 19,
    Education_Qualification: "Currently pursuring B tech IT.",
    DOB:"23-Jun-2005",
    Sex:"Female",
  }

  return (
    <div>
      <h1>User Profile Page</h1>
      <UserProfile 
        name={userData.name} 
        age={userData.age} 
        Education_Qualification={userData.Education_Qualification} 
        DOB={userData.DOB}
        Sex={userData.Sex}
       
      />
    </div>
  );
};

export default App;
