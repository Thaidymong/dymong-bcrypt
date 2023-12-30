export type AdminInput = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
};

export type LoginInput = {
  id: number;
  email: string;
  password: string;
};

// export type Admins = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
//   phone_number: string;
// };