import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from './dynamo-document-client';


export const  getItem = async (params) => {
    try {
        const data = await ddbDocClient.send(new GetCommand(params));
        return data;
      } catch (err) {
        console.log("Error", err);
        throw err;
      }
}

export const queryTable = async () => {
    try {
      const data = await ddbDocClient.send(new QueryCommand(params));
      return data;
    } catch (err) {
      console.log("Error", err);
    }
  };