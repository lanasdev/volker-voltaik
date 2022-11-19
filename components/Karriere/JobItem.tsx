import { Disclosure, Transition } from "@headlessui/react";
import { CaretRight } from "phosphor-react";
import Link from "next/link";
import { StructuredText } from "react-datocms";

const JobItem = ({ job }) => {
  return (
    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full flex-col justify-between rounded-md bg-yellow px-4 py-2 text-left text-sm font-medium hover:bg-darkwhite focus:outline-none focus-visible:ring focus-visible:ring-darkYellow focus-visible:ring-opacity-75">
            <div className="flex w-full flex-row items-center justify-between">
              <span>
                {job.title} - {job.location}
              </span>
              <CaretRight
                size={32}
                className={`${
                  open ? " rotate-90 transform" : ""
                } h-5 w-5 text-black`}
              />
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-in"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="prose px-4 pt-4 pb-2">
              <StructuredText data={job.content} />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default JobItem;
