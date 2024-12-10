import dynamic from 'next/dynamic';
import { Icon } from '@iconify/react';
import IconLink from './IconLink';

export type ReleaseProps = {
  name: string;
  description: string;
  repository?: string;
  tebex?: string;
  serverCount: number;
  youtubeVideoId: string;
};

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ReleaseCard: React.FC = (props: ReleaseProps) => {
  return (
    <div className="flex w-full flex-col gap-y-2 rounded-md bg-neutral-800 p-4 transition-colors select-none hover:bg-neutral-700">
      <div className="flex items-center justify-between gap-2">
        <h2 className="line-clamp-1 !text-2xl leading-none !font-medium">{props.name}</h2>
        {props.repository && <IconLink className="h-6 w-6" href={props.repository} icon="mdi:github" />}
        {props.tebex && <IconLink className="h-6 w-6" href={props.tebex} icon="ac:tebex" />}
      </div>

      <p className="line-clamp-2 grow text-sm text-neutral-400">{props.description}</p>

      <div className="flex items-center gap-1">
        <Icon className="h-6 w-6" icon="mdi:account-supervisor" />
        <p className="line-clamp-1">
          Used by <span className="font-bold">{props.serverCount}+</span> servers
        </p>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-md">
        <ReactPlayer
          light
          playing
          controls
          url={`https://youtube.com/watch?v=${props.youtubeVideoId}`}
          height="100%"
          width="100%"
          playIcon={<Icon icon="logos:youtube-icon" className="h-14 w-14" />}
        />
      </div>
    </div>
  );
};

export default ReleaseCard;
