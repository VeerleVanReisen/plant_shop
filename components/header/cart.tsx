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

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

interface cartTypes {
  closeElement: React.MouseEventHandler<HTMLButtonElement>;
}

export const Cart = (props: cartTypes) => {
  const cartItems = (
    <ul>
      {[
        {
          id: "p1",
          name: "Pink Princess",
          description: "Aglaonema",
          price: 5.95,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div
      style={{ backgroundColor: "#ffffff" }}
      className=" bg-red rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        {cartItems}
        <div>
          <span>Total amount:</span>
          <span>58.00</span>
        </div>
        <div>
          <button
            onClick={props.closeElement}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Close
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-5">
            Order
          </button>
        </div>
        {/* {solutions.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
          >
            <item.icon
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              aria-hidden="true"
            />
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">{item.name}</p>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </div>
          </a>
        ))} */}
      </div>
      {/* <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
        {callsToAction.map((item) => (
          <div key={item.name} className="flow-root">
            <a
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">{item.name}</span>
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};
