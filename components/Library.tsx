"use client";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";

type LibraryProps = {
  songs: Song[];
};

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) return authModal.onOpen();

    //TODO: Check for subscription.

    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library!</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={26}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 px-3 mt-4">
        {songs.map((song) => (
          <MediaItem key={song.id} data={song} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Library;
