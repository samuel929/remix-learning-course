import { LoaderFunction } from "@remix-run/node";
import { json, useRouteLoaderData } from "@remix-run/react";
import { loader as parentLoader } from "../settings";
export const loader: LoaderFunction = () => {
  return json({ message: "Yo" });
};

const Profile = () => {
  const { message } =
    useRouteLoaderData<typeof parentLoader>("routes/settings");
  return (
    <div>
      <p>Profile Settings</p>
      <p>There are the profile settings</p>
      <p>Profile Settings</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default Profile;
