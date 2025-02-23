import React, { useState } from 'react';
import { UserRegister, CreateBusiness } from './components';
import CalendarPage from './components/CalendarPage';

const App = () => {
  const [showCreateBusiness, setShowCreateBusiness] = useState(false);

  const handleUserRegisterSuccess = () => {
    setShowCreateBusiness(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* {showCreateBusiness ? (
        <CreateBusiness />
      ) : (
        <UserRegister onSuccess={handleUserRegisterSuccess} />
      )} */}
      <CalendarPage />
    </div>
  );
};

export default App;
