import { API_ROUTE } from "../config";

// Components

import App from "./App";

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${API_ROUTE}/wellness/getchallenges?membercode=${process.env.MEMBER_CODE}&status=ongoing&type=individual&pageno=1&rowctr=0`,
    {
      method: "GET",
      headers: {
        Authorization: `${process.env.AUTH_TOKEN}`,
      },
    }
  );

  const challenges = await res.json();

  return {
    props: {
      challenges,
    },
  };
};

export default (challenges) => <App {...challenges} />;
