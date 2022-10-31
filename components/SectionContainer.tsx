"use client";

import cn from "classnames";

export default function SectionContainer({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <section className={cn("container mx-auto max-w-4xl px-4 ", className)}>
      {children}
    </section>
  );
}
