import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import Link from "next/link";
import { StructuredText } from "react-datocms";

const JobItem = ({ job }) => {
  return (
    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>
              {job.title} - {job.location}
            </span>
            <CaretDown
              size={32}
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="prose px-4 pt-4  pb-2">
              <StructuredText data={job.content} />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default JobItem;
