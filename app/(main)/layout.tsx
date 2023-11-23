import { ReactNode, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="container relative flex h-screen w-screen justify-between space-x-2 p-3">
      <Sidebar className="absolute bottom-1 flex w-full items-center justify-around sm:static sm:block sm:max-w-fit " />
      {children}
      <Aside className="hidden max-w-[400px] lg:block" />
    </div>
  );
}
