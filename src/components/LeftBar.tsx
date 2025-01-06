import Link from "next/link";

import { menuList } from "@/constants";

import Image from "./Image";

const LeftBar = () => {
  return (
    <div className="sticky top-0 flex h-screen flex-col justify-between pb-8 pt-2">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col items-center gap-2 text-base lg:gap-3 xxl:items-start xxl:gap-4">
        {/* LOGO */}
        <Link href="/" className="rounded-full p-2 hover:bg-[#181818]">
          <Image path="icons/logo.svg" alt="logo" w={24} h={24} />
        </Link>

        {/* MENU LIST */}
        <div className="flex flex-col gap-3">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex items-center gap-4 rounded-full p-2 hover:bg-[#181818]"
            >
              <Image
                path={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* BUTTON */}
        <Link
          href="/"
          className="flex size-12 items-center justify-center rounded-full bg-white text-black xxl:hidden"
        >
          <Image path="icons/post.svg" alt="new post" w={24} h={24} />
        </Link>
        <Link
          href="/"
          className="hidden rounded-full bg-white px-20 py-2 font-bold text-black xxl:block"
        >
          Post
        </Link>
      </div>

      {/* USER */}
      <div className="flex items-center justify-between rounded-full p-2 hover:bg-[#181818]">
        <div className="flex items-center gap-2">
          <div className="relative size-10 overflow-hidden rounded-full">
            <Image path="general/avatar.png" alt="avatar" w={100} h={100} tr />
          </div>
          <div className="hidden flex-col xxl:flex">
            <span className="font-bold">Ahsan Kabir</span>
            <span className="text-sm text-textGray">@ahsanrkabir</span>
          </div>
        </div>
        <div className="hidden cursor-pointer font-bold xxl:block">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
