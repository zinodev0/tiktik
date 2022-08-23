import type { NextPage } from "next";
import axios from "axios";
import { BASE_URL } from "../utils";

// interface IProps{
//   videos:
// }

const Home: NextPage = ({ videos }) => {
  console.log(videos);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () =>
  //   {
  //   query: { topic },
  // }: {
  //   query: { topic: string };
  // }
  {
    let response = await axios.get(`${BASE_URL}/api/post`);

    // if (topic) {
    //   response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
    // }

    return {
      props: { videos: response.data },
    };
  };
