'use client';

import { cn } from '@/lib/utils';
import { VideoIcon } from 'lucide-react';
import ReactPlayer from 'react-player';
import ContentTypeIcon from './ContentTypeIcon';

export type VideoCardProps = {
  poster?: string;
  videoUrl?: string;
  title: string;
  description: string;
  size?: number;
};

export default function VideoCard({
  poster,
  videoUrl,
  title,
  description,
  size = 1
}: VideoCardProps) {
  return (
    <div
      className={cn(
        'group rounded-xl  relative overflow-hidden bg-black flex flex-col justify-end p-4  aspect-[9/16] col-span-1',
        size === 1 && !Boolean(poster) && 'aspect-[9/16]',
        size === 1 && ' md:col-span-1  ',
        size === 2 && 'sm:min-h-[50svh] md:col-span-2 sm:aspect-auto',
        size === 3 &&
          'sm:min-h-[50svh] sm:col-span-2 md:col-span-3 sm:aspect-auto',
        !Boolean(poster) && 'p-0',
        size === 3 && true && '!aspect-video'
      )}
    >
      <ContentTypeIcon Icon={VideoIcon} dark={!Boolean(poster)} />
      {Boolean(videoUrl) && (
        <div className="top-0 left-0 absolute h-full w-full">
          <ReactPlayer
            src={videoUrl}
            controls={true}
            style={{
              width: '100%',
              height: '100%'
            }}
            light={poster || ''}
          />
          {/* <img
            src={imgUrl}
            alt=""
            className="w-full h-full object-cover object-center group-hover:scale-105 duration-300"
          /> */}
        </div>
      )}
    </div>
  );
}
