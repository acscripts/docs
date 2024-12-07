export default {
  index: 'Home',
  radio: 'AC Radio',
  scoreboard: {
    title: (
      <div className="flex w-full justify-between gap-2">
        <span>AC Scoreboard</span>
        <span className="self-center rounded bg-green-600 px-1 py-0.5 text-xs font-semibold text-white">NEW</span>
      </div>
    ),
  },
  documents: 'AC Documents',
  gifts: 'AC Gifts',
  link_tebex: {
    title: 'Tebex',
    href: 'https://store.acscripts.dev/',
    type: 'page',
    newWindow: true,
  },
  link_kofi: {
    title: 'Support us',
    href: 'https://ko-fi.com/antond',
    type: 'page',
    newWindow: true,
  },
};
