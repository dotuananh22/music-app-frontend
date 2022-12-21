type User = {
  username: string;
  password: string;
  fullName: string;
  imageUrl: string;
  birthday: Date;
  role: "admin" | "user";
  email: string;
  phoneNumber: string;
  following: string;
};

export default User;
