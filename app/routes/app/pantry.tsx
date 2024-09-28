import { ActionFunction, json, LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import classNames from "classnames";
import { Button, PrimaryButton } from "~/components/icons/forms";
import { PlusIcon, SearchIcon } from "~/components/icons/icons";
import { createShelf, getAllShelves } from "~/models/pantry-shelf.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const shelves = await getAllShelves(q);
  return json({ shelves });
};

export const action: ActionFunction = async () => {
  return createShelf();
};
const Pantry = () => {
  const { shelves } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const isSearching = navigation.formData?.has("q");
  const isCreatingShelf = navigation.formData?.has("createShelf");
  navigation.formData === null;
  return (
    <div>
      <Form
        className={classNames(
          "flex border-2 border-gray-300 rounded-md",
          "focus-within:border-primary md:w-80",
          isSearching ? "animate-pulse" : ""
        )}
      >
        <button title='button' className='px-2 mr-1' type='submit'>
          <SearchIcon />
        </button>
        <input
          defaultValue={searchParams.get("q") ?? ""}
          type='text'
          placeholder='Search Shelves..'
          name='q'
          autoComplete='off'
          className='w-full py-3 px-2 outline-none'
        />
      </Form>
      <Form method='post'>
        <PrimaryButton
          name='createShelf'
          className={classNames(
            "mt-4 w-full md:w-fit",
            isCreatingShelf ? "bg-primary-light" : ""
          )}
        >
          <PlusIcon />
          <span className='pl-2'>
            {isCreatingShelf ? "Creating Shelf" : "Create Shelf"}
          </span>
        </PrimaryButton>
      </Form>
      <ul
        className={classNames(
          "flex gap-8 overflow-x-auto mt-4 pb-4",
          "snap-x snap-mandatory md:snap-none"
        )}
      >
        {shelves.map((item) => (
          <li
            key={item.id}
            className={classNames(
              "border-2 border-primary rounded-md p-4 h-fit",
              "w-[calc(100vw-2rem)] flex-none snap-center",
              "md:w-96"
            )}
          >
            <h1 className='text-2xl font-extrabold mb-2'>{item.name}</h1>
            <ul>
              {item.items.map((item) => (
                <li key={item.id} className='py-2'>
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pantry;
