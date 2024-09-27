import { LoaderFunction } from "@remix-run/node";
import {
  Link,
  Outlet,
  useRouteLoaderData,
  json,
  useRouteError,
  useLoaderData,
} from "@remix-run/react";
export const loader: LoaderFunction = () => {
  return json({ message: "Samuel" });
};

const Settings = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <p>This is the setting page {data?.message}</p>
      <nav>
        <Link to='app'>App</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Settings;

export function ErrorBoundary() {
  const error = useRouteError();
  if (error instanceof Error) {
    return (
      <div className='bg-red-300 border-2 border-red-600 rounded-md p-4'>
        <h1>whoops,something went wrong</h1>
        <p>{error.message}</p>
      </div>
    );
  }
  return <div>An unepceted error occured</div>;
}
