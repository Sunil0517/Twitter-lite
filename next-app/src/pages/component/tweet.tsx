import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import LikeButton from "./like-button";
import { Profile, Tweet } from "@/lib/db/schema";

import ReplyDialog from "./reply-dialog";
import { useRouter } from "next/navigation";
import ProfileAvatar from "./profile-avatar";

dayjs.extend(relativeTime);

type TweetProps = {
  tweet: {
    userProfile: Profile;
    tweetDetails: Tweet;
  };
  likesCount: number;
  hasLiked: boolean;
  repliesCount: number;
};

const sampleTweetData = {
  userProfile: {
    username: "john_doe",
    avatarUrl: "/path_to_avatar",
    fullName: "John Doe",
  },
  tweetDetails: {
    id: "1",
    text: "Sample tweet text.",
    createdAt: new Date(),
  },
};

const likesCount = 100; // Sample likes count
const hasLiked = false; // Sample like status
const repliesCount = 50; // Sample replies count

const Tweet = () => {
  const router = useRouter();

  return (
    <>
      {/* ... Rest of the code ... */}
    </>
  );
};

export default Tweet;
