import { ReactNode, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="container flex h-screen w-screen justify-between space-x-2 p-3">
      <Sidebar className="fixed bottom-1 flex w-screen flex-row  sm:static sm:w-fit  sm:flex-col sm:items-center sm:justify-between" />
      {children}
      <Aside className="hidden max-w-[400px] lg:block" />
    </div>
  );
}
