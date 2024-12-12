import Image from 'next/image';
import Link from 'next/link';
import { addIcon, Icon } from '@iconify/react';
import ReleaseCard, { type ReleaseProps } from './parts/ReleaseCard';

addIcon('ac:tebex', {
  body: '<path fill="currentColor" d="M4.607 5.082C5.373 3.83 6.76 3.467 6.76 3.467S4.113 2.773 4.113 0c0 2.773-2.648 3.467-2.648 3.467s1.387.362 2.153 1.615H0v4.802l.823-1.487h1.644v8.288L5.757 20V9.852c-.839-.39-2.044-1.38-2.476-2.136.737.224 1.726.52 2.496.682h2.448V5.082H4.607Z"/>',
  width: 9,
  height: 20,
});

addIcon('ac:acscripts', {
  body: '',
  width: 24,
  height: 24,
});

const data: ReleaseProps[] = [
  {
    name: 'AC Scoreboard',
    description: 'The ultimate scoreboard solution for your server',
    repository: 'https://github.com/acscripts/ac_scoreboard',
    serverCount: 320,
    youtubeVideoId: 'D_S4OmYOKJA',
  },
  {
    name: 'AC Radio',
    description: 'Simple and framework-standalone radio UI for pma-voice',
    repository: 'https://github.com/acscripts/ac_radio',
    serverCount: 1200,
    youtubeVideoId: '9zxbDJMhVSw',
  },
  {
    name: 'AC Documents',
    description: 'Create and view custom documents in-game',
    tebex: 'https://store.acscripts.dev/package/5384551',
    serverCount: 80,
    youtubeVideoId: 'rnU7ggQdhF4',
  },
];

const Introduction: React.FC = () => {
  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <div className="flex items-center gap-2 select-none">
          <Image src="/logo.svg" alt="logo" width={64} height={64} />
          <h1 className="!text-5xl !font-medium">AC Scripts</h1>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="https://github.com/acscripts"
            target="_blank"
            className="flex w-fit items-center gap-2 rounded-md bg-[#333333] px-4 py-2"
          >
            <Icon icon="mdi:github" className="h-6 w-6" />
            <p className="!text-md !font-medium">GitHub</p>
          </Link>

          <Link
            href="https://discord.acscripts.dev"
            target="_blank"
            className="flex w-fit items-center gap-2 rounded-md bg-[#5865f2] px-4 py-2"
          >
            <Icon icon="ic:baseline-discord" className="h-6 w-6" />
            <p className="!text-md !font-medium">Discord</p>
          </Link>

          <Link
            href="https://store.acscripts.dev"
            target="_blank"
            className="flex w-fit items-center gap-2 rounded-md bg-[#41c4c3] px-4 py-2 !text-black"
          >
            <Icon icon="ac:tebex" className="h-6 w-auto" />
            <p className="!text-md !font-medium">Tebex</p>
          </Link>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 justify-between gap-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((data, index) => (
          <ReleaseCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Introduction;
