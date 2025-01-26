export const config = {

  FIREBASE_SERVICE_ACCOUNT_REMTECH_PROJECT:
  {
    apiKey: process.env["API_KEY"],
    authDomain: process.env["Auth_Domain"],
    databaseURL: process.env["Database_URL"],
    projectId: process.env["Project_Id"],
    storageBucket: process.env["Storage_Bucket"],
    messagingSenderId: process.env["Messaging_SenderId"],
    appId: process.env["App_Id"],
    measurementId: process.env["Measurement_Id"]
  }
}