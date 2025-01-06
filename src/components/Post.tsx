import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

const Post = () => {
  return (
    <div className="border-y border-borderGray p-4">
      {/* POST TYPE */}
      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-textGray">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767B"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Ahsan Kabir reposted</span>
      </div>

      {/* POST CONTENT */}
      <div className="flex gap-4">
        {/* AVATAR */}
        <div className="relative size-10 overflow-hidden rounded-full">
          <Image path="general/avatar.png" alt="avatar" w={100} h={100} tr />
        </div>
        {/* CONTENT */}
        <div className="flex flex-1 flex-col gap-2">
          {/* TOP */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-base font-bold">Ahsan Kabir</h1>
              <span className="text-textGray">@ahsanrkabir</span>
              <span className="text-textGray">1 day ago</span>
            </div>

            <PostInfo />
          </div>

          {/* TEXT & MEDIA */}
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            aperiam a sunt, laborum beatae aliquam fugiat velit minus error
            dolor ex ipsam qui sapiente nam dolorum repellat facere vero itaque!
          </p>
          <Image path="general/post.jpeg" alt="post" w={600} h={600} />

          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
