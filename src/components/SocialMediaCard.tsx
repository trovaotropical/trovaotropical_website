'use client';

import { cn } from '@/lib/utils';
import { UsersIcon, VideoIcon, X } from 'lucide-react';
import ReactPlayer from 'react-player';
import ContentTypeIcon from './ContentTypeIcon';
import {
  FacebookEmbed,
  InstagramEmbed,
  LinkedInEmbed,
  PinterestEmbed,
  TikTokEmbed,
  XEmbed
} from 'react-social-media-embed';

export type SocialMediaCardProps = {
  url: string;
};

export default function SocialMediaCard({ url }: SocialMediaCardProps) {
  return (
    <div
      className={cn(
        'group rounded-xl  relative overflow-hidden bg-black p-4  aspect-[9/16] col-span-1 flex items-center justify-center'
      )}
    >
      <ContentTypeIcon Icon={UsersIcon} />
      {url.includes('facebook') ? (
        <FacebookEmbed url={url} className="w-full h-full" />
      ) : url.includes('instagram') ? (
        <InstagramEmbed url={url} className="w-full h-full" />
      ) : url.includes('x.com') ? (
        <XEmbed url={url} className="w-full h-full" />
      ) : url.includes('tiktok') ? (
        <TikTokEmbed url={url} className="w-full h-full" />
      ) : url.includes('pinterest') ? (
        <PinterestEmbed url={url} className="w-full h-full" />
      ) : url.includes('linkedin') ? (
        <LinkedInEmbed url={url} className="w-full h-full" />
      ) : (
        'Link não suportado.'
      )}
    </div>
  );
}
