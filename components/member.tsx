import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number; // github id
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => {
  return (
    <div>
      <Image
        src={`https://avatars.githubusercontent.com/u/${id}?v=4`}
        alt={name}
        width={1555}
        height={1555}
        className="rounded-full"
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link}>
          <a target="_blank">{socialId}</a>
        </Link>
      </div>
    </div>
  );
};

export default Member;
