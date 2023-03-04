import { storage } from "./firebase";

const uploadFileToFirebase = async (folderName: string, file: File) => {
  try {
    const storageRef = storage.ref();
    // get file extension
    const imageRef = storageRef.child(`${folderName}/${file.name}`);
    await imageRef.put(file);
    const url = await imageRef.getDownloadURL();
    return url;
  } catch (error: any) {
    console.log("Error uploading file: ", error.message);
  }
};

const storageFirebaseApi = {
  uploadFileToFirebase,
};

export default storageFirebaseApi;
