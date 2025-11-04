


type RawUser = {
  name: string;
  email: string;
};

export type User = {
  name: string;
  email: string;
  city: string;
  street: string;
};

export const getUsers = async (): Promise<User[]> => {
  try {

    const response = await fetch("/postsData.json");

    if (!response.ok) {
      throw new Error(`Failed to fetch postsData.json: ${response.status} ${response.statusText}`);
    }

    const users = (await response.json()) as RawUser[];

    return users.map((user: RawUser) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error: unknown) {
    console.error(
      "[Services] Gagal mengambil data:",
      error instanceof Error ? error.message : String(error)
    );
    throw error;
  }
};