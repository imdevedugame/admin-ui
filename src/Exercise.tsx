

import React, { useEffect, useState } from "react"; 
import UserCard from "./UserCard";
import { getUsers } from "./Services"; 

function Exercise() {

  type User = {
    email: string;
    [key: string]: any;
  };

  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {

    const fetchData = async () => {
      try {

        const data = await getUsers();

        setUsers(data);
      } catch (error) {

        if (error instanceof Error) {
          console.error("[Component] Gagal menampilkan data:", error.message);
        } else {
          console.error("[Component] Gagal menampilkan data:", String(error));
        }
      }
    };

    fetchData(); 
  }, []);

 
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {}
          {users.map((user) => (
            <UserCard 
              key={user.email} 
              {...user}         
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;