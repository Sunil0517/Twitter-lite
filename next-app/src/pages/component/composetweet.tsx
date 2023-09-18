import React from "react";
import { randomUUID } from "crypto";


const ComposeTweet = ():any => {
  async function submitTweet(formData: FormData) {
    "use server";

    const tweet = formData.get("tweet");

    if (!tweet) return;

    // Simulate data insertion to an array
    const newTweet = {
      text: tweet.toString(),
      id: randomUUID(),
      // Assuming a dummy profile ID
      profileId: randomUUID(),
    };

    // Add the new tweet to the array

    // Simulate revalidation (this may be different based on your actual setup)
    // revalidatePath("/");

    return { data: newTweet, error: "" };
  }

  
};

export default ComposeTweet;
