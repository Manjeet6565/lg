import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('66a0eb5500097102b575') ;
    
    export const account= new Account(client);

   