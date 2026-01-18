import React, { useContext } from 'react';

/**
 * UserContext definitio ad usum domesticum
 */
const UserContext = React.createContext();

/**
 * UserDetails Component
 * Hic component data directe capit
 */
const UserDetails = () => {
  const userData = useContext(UserContext);
  return (
    <div className="p-4 border rounded shadow-sm">
      <p className="text-lg font-bold">Nomen: {userData?.name}</p>
      <p className="text-gray-600">Email: {userData?.email}</p>
    </div>
  );
};

/**
 * UserInfo Component
 * Transitus simplex ad UserDetails sine data manuali (Prop Drilling)
 */
function UserInfo() {
  return (
    <div className="mt-4">
      {/* UserDetails hic vocatur sine argumentis */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;