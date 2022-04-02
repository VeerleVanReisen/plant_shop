/*Used example from https://tailwindui.com/components/marketing/elements/headers*/
import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
import { Cart } from "./cart";
import ProductsProvider from "../../store/products-provider";
import ProductsContext from "../../store/products-context";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const handleCloseElement = () => {
  alert("hello");
};

export const Header = (props: any) => {
  const productsCtx = useContext(ProductsContext);

  const numberOfProductItems = productsCtx.items.reduce(
    (currentNumber, item) => {
      return currentNumber + item.amount;
    },
    0
  );
  return (
    <>
      <Popover className="relative bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10 ">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                {/* <span className="sr-only">Workflow</span> */}
                <div className="flex items-start ...">
                  <img
                    src="/images/icons/logo.svg"
                    alt="Logo company name"
                    className="w-12"
                  />
                  <h1 className="inline-block align-middle mx-5 text-green h-full my-auto">
                    Plants shop
                  </h1>
                </div>
              </Link>
            </div>
            {/* <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div> */}
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/products">
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Producten
                </a>
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Winkelwagen</span>
                      <span className="ml-2">{numberOfProductItems}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <Cart closeElement={handleCloseElement} />
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </Popover>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10 ">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};
