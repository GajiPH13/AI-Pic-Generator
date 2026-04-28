"use client";
import { Card } from "@heroui/react";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { UpdateUserForm } from "@/components/profile-modal/Profile";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div>
      <h1>Profile Page</h1>
      <Card className=" flex flex-col items-center border mx-auto w-125 py-10 mt-5">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            // for google login to show the avatar
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2>{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <UpdateUserForm />
      </Card>
    </div>
  );
};

export default ProfilePage;
