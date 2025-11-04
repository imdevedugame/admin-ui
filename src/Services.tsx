
const city = "Jakarta";
const street = "Jl Kebon Jeruk";

type RawUser = {
  name: string;
  email: string;
};

export const getUsers = async () => {
  try {
   
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = (await response.json()) as RawUser[];

    return users.map((user: RawUser) => ({
      name: user.name, 
      email: user.email, 
      
      
      city,
      street,
    }));
  } catch (error: unknown) {
  
    console.error("[Services] Gagal mengambil data:", (error as Error).message);
    throw error; 
  }
};