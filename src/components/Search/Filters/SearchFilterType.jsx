import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline/index.js";
import { useDispatch } from "react-redux";
import { setFilterOption } from "../../../redux/slices/searchSlice.js";

export default function SearchFilterType() {
  const joinClassNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const dispatch = useDispatch();

  const filterOptions = [
    { id: "diet", name: "Diets" },
    { id: "cuisineType", name: "Cuisines" },
    { id: "health", name: "Health" },
    { id: "mealType", name: "Categories" },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left align-middle">
      <Menu.Button className="inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-50">
        <AdjustmentsHorizontalIcon
          className="-mr-1 h-6 w-6 text-blue-600"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {filterOptions &&
              filterOptions.map((option) => {
                return (
                  <Menu.Item key={option.id}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={joinClassNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm",
                        )}
                        onClick={() => {
                          dispatch(setFilterOption(option));
                        }}
                      >
                        {option.name}
                      </a>
                    )}
                  </Menu.Item>
                );
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
