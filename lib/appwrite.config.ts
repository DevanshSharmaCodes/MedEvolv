import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT:ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;
const client = new sdk.Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66cb1cf0001e91eadd1c').setKey('876ac8766ea19c9c9da7a6b8a348756a269c039c9cc6f02ecf731d73c203dd89b08e2ff40fadde97296cb3754f6dee2b739025be732e2013fd3b35295726bcd9939a10cf6cce88a3b467f900ae9670876382461a064a3b98ac616a089fd6a5e87b0e1f256689545447bb725c6c9de2c6bc8511b770416bca8d141a2466842559');

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);