"use client";

import clsx from "clsx";

export default function SectionContainer({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <section className={clsx("container mx-auto max-w-4xl px-4 ", className)}>
      {children}
    </section>
  );
}
