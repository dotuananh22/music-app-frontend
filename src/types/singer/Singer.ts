import CommonTypeModel from "types/CommonTypeModel";

type Singer = {
  fullName: string;
  nickname: string;
  bio: string;
  story: string;
  imageUrl: string;
  imageCover: string;
  tick: boolean;
  gender: number;
  birthday: Date;
  country: string;
  debutYear: number;
  follower: number;
  website?: string;
  facebook?: string;
  youtube?: string;
  instagram?: string;
  twitter?: string;
} & CommonTypeModel;

export default Singer;
