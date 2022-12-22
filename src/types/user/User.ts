type User = {
  _id: string;
  username: string;
  password: string;
  fullName: string;
  imageUrl: string;
  birthday: Date;
  role: "admin" | "user";
  email: string;
  phoneNumber: string;
  following: number;
};

export default User;
