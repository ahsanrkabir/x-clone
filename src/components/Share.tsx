import Image from "./Image";

const Share = () => {
  return (
    <div className="flex gap-4 p-4">
      {/* AVATAR */}
      <div className="relative size-10 overflow-hidden rounded-full">
        <Image path="general/avatar.png" alt="avatar" w={100} h={100} tr />
      </div>

      {/* OTHERS */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="bg-transparent text-xl outline-none placeholder:text-textGray"
        />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <Image
              path="icons/image.svg"
              w={20}
              h={20}
              className="cursor-pointer"
              alt="image"
            />
            <Image
              path="icons/gif.svg"
              w={20}
              h={20}
              className="cursor-pointer"
              alt="gif"
            />
            <Image
              path="icons/poll.svg"
              w={20}
              h={20}
              className="cursor-pointer"
              alt="poll"
            />
            <Image
              path="icons/emoji.svg"
              w={20}
              h={20}
              className="cursor-pointer"
              alt="emoji"
            />
            <Image
              path="icons/schedule.svg"
              w={20}
              h={20}
              className="cursor-pointer"
              alt="schedule"
            />
            <Image
              path="icons/location.svg"
              w={20}
              h={20}
              className="cursor-pointer"
              alt="location"
            />
          </div>
          <button className="rounded-full bg-white px-4 py-2 font-bold text-black">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
