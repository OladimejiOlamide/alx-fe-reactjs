import React, { useContext } from 'react';

// UserContext definitio intra fasciculum ad errorem tollendum
const UserContext = React.createContext();

/**
 * UserDetails Component
 * Consumit contextum sine prop-drilling
 */
const UserDetails = () => {
  const userData = useContext(UserContext);
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc' }}>
      <p>Nomen: {userData.name}</p>
      <p>Litterae Electronicae: {userData.email}</p>
    </div>
  );
};

/**
 * UserInfo Component
 * Transitus simplex sine data manuali
 */
const UserInfo = () => {
  return <UserDetails />;
};

/**
 * ProfilePage Component
 * Pars principalis quae structuram ostendit
 */
function ProfilePage() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: '20px' }}>
        <h2>Pagina Personalis</h2>
        <UserInfo />
      </div>
    </UserContext.Provider>
  );
}

export default ProfilePage;