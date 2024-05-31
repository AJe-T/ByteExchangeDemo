import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />   
    </div>
  );
};

export default Home;
