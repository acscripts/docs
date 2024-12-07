export default {
  index: 'Home',
  radio: 'AC Radio',
  scoreboard: {
    title: (
      <div className="flex justify-between w-full gap-2">
        <span>AC Scoreboard</span>
        <span className="bg-green-600 text-white px-1 py-0.5 rounded font-semibold text-xs self-center">NEW</span>
      </div>
    ),
  },
  documents: 'AC Documents',
  gifts: 'AC Gifts',
  link_tebex: {
    title: 'Tebex',
    href: 'https://store.acscripts.dev/',
    type: 'page',
    newWindow: true
  },
  link_kofi: {
    title: 'Support us',
    href: 'https://ko-fi.com/antond',
    type: 'page',
    newWindow: true
  }
}
