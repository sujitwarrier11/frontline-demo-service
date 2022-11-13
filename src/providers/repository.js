const { QueryCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");
const { ddbDocClient } = require('./dynamo-document-client');


const  getItem = async (params) => {
    try {
        const data = await ddbDocClient.send(new GetCommand(params));
        return data;
      } catch (err) {
        console.log("Error", err);
        throw err;
      }
}

const queryTable = async (params) => {
    try {
      const data = await ddbDocClient.send(new QueryCommand(params));
      return data;
    } catch (err) {
      console.log("Error", err);
    }
  };

  module.exports = {
    getItem,
    queryTable
  }