import Link from "next/link";
import Counter from "@/components/counter";
import React, { ComponentPropsWithoutRef } from "react";

const MDXComponents = {
  Counter,
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="mt-8 text-3xl font-bold" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-6 text-2xl font-semibold" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-4 text-xl font-medium" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 leading-7 text-gray-800" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <Link
      className="text-blue-600 underline hover:text-blue-800"
      href={props.href ?? "#"}
    >
      {props.children}
    </Link>
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 my-4" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 my-4" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="overflow-x-auto rounded bg-gray-900 p-4 text-gray-100"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600"
      {...props}
    />
  ),
};

export default MDXComponents;
