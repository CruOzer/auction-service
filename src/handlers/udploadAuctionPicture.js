//import AWS from "aws-sdk";
import commonMiddleware from "../lib/commonMiddleware";


async function uploadAuctionPicture(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({}),
  };
}

export const handler = commonMiddleware(uploadAuctionPicture);
