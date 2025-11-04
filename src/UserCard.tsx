

import { useState } from "react";

interface UserCardProps {
  name?: string;
  email?: string;
  street?: string;
  city?: string;
  [key: string]: any;
}

function UserCard(props: UserCardProps) {
  const { name, email, street, city, ...rest } = props;

  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      {}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value as React.ReactNode}
        </p>
      ))}

      {}
      <button
        className={`mt-4 text-white p-2 rounded-md ${
          clicked ? "bg-green-600" : "bg-gray-500" 
        }`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;