import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si';
import { HiDatabase } from 'react-icons/hi';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';

const recent = 0.86;
const old = 0.6;
const oldest = 0.38;

export const linkedInLink = 'https://www.linkedin.com/in/sam-herman/';
export const githubLink = 'https://github.com/hedonicadapter';

export const ReactIcon = () => (
  <RiReactjsLine
    className='react-icon'
    style={{ marginTop: -1, marginRight: -4 }}
    size={23}
  />
);

export const TypeScriptIcon = ({ drip }: { drip: string }) => {
  let light = drip === 'light';

  return (
    <span
      style={{
        // transform: 'scale(1, 0.9) translateY(-22%)',
        color: light ? 'rgba(14, 14, 14, 1)' : 'rgba(255, 255, 255, 1)',
        fontSize: '0.68em',
        fontWeight: 'bold',
        fontFamily: 'Inter-Medium',
        backgroundColor: light
          ? 'rgba(255, 255, 255, 0.87)'
          : 'rgba(14, 14, 14,1)',
        borderRadius: 1,

        paddingBottom: 1,
        paddingLeft: 4,
        paddingRight: 2,
        paddingTop: 4,

        // These look dumb but they work
        marginTop: 1,
        marginRight: 1,
        marginLeft: -1,
        marginBottom: -1,
      }}
      className='no-select typescript-icon'
    >
      TS
    </span>
  );
};

export const minglerStack = [
  {
    icon: <ReactIcon />,
    title: 'React',
  },
  { icon: <SiMongodb size={21} />, title: 'MongoDB' },
  {
    icon: <SiTypescript size={20} style={{ marginLeft: -1 }} />,
    title: 'TypeScript',
  },
  {
    icon: <FaPython size={21} />,
    title: 'Python',
  },
];

export const roubineStack = [
  {
    icon: <ReactIcon />,
    title: 'React Native',
  },
  {
    icon: <SiFirebase className='firebase-icon' size={21} />,
    title: 'Firestore',
  },
];

export const languages = [
  {
    icon: <ReactIcon />,
    title: 'React & React Native',
    rating: 'max',
  },
  { icon: <SiMongodb size={21} />, title: 'MongoDB', rating: 'high' },
  {
    icon: <SiTypescript size={20} style={{ marginLeft: -1 }} />,
    title: 'TypeScript',
  },
  {
    icon: <HiDatabase size={22} />,
    title: 'SQL',
    rating: 'low',
    opacity: old,
  },
  {
    icon: <FaJava size={22} style={{ marginTop: -2 }} />,
    title: 'Java',
    rating: 'mid',
    opacity: old,
  },
  {
    icon: <FaPython size={21} style={{ marginTop: -1 }} />,
    title: 'Python',
    rating: 'mid',
    opacity: recent,
  },
  {
    icon: (
      <span
        className='language-icon'
        style={{
          position: 'relative',

          marginTop: -1.2,
          marginLeft: 2.4,
          paddingTop: 3,

          fontSize: '0.8rem',
          fontWeight: 'bold',
          lineHeight: '0.5rem',
          fontFamily: 'Inter-Regular',
        }}
      >
        .NET
        <br />
        <span style={{ fontSize: '0.6rem', marginLeft: 1, marginTop: 1 }}>
          core
        </span>
      </span>
    ),
    title: '.NET Core',
    rating: 'mid',
    opacity: old,
  },
];

export interface TimelineEvent {
  title: string;
  subTitle?: string;
  text?: string;
}
export const minglerTimelineEvents: TimelineEvent[] = [
  {
    title: 'prototype',
    subTitle: 'A year ago',
    text: 'The next big chat app? Probably not. Something that will keep me busy and teach me stuff? Definitely. ',
  },
  {
    title: 'backlog',
    subTitle: 'Overexcited',
    text: 'As always, I set out to do much more than I ended up doing. Maybe I learned to not underestimate user stories.',
  },
  {
    title: 'initial stack',
    subTitle: 'My last project went ok...',
    text: '...so React and firestore should be fine, right?',
  },
  {
    title: 'activities',
    subTitle: 'How tf do you get window data in real time?',
    text: "To be honest I still don't know, but it works 😎",
  },
  {
    title: 'browser activities',
    subTitle: 'How tf do you get browser tab data in real time?',
    text: 'Chrome extension.',
  },
  {
    title: 'node.js',
    subTitle: 'Pain',
    text: 'Tried to force things to work with firestore for a couple weeks. Moved to RealmDB for a while. Finally gave up, deleted it all, and learned and rewrote everything with MongoDB, node.js, and express.',
  },
  {
    title: 'Discord :(',
    subTitle: 'The day I realized discord also has an activities feature',
    text: 'Man. My big idea was already a thing. Also I realized their server and channel systems and stuff go hard. Thought I had something. Coding is still fun though, so I just move on.',
  },
  {
    title: 'socket.io',
    text: 'took some time to figure out how to connect users to each other.',
  },
  {
    title: 'almost there',
    text: 'Nothing works, first time making something production-ready.',
  },
  { title: 'production', subTitle: 'Today', text: 'goes kinda hard tho' },
];

export const whileTap = {
  opacity: 0.8,
  scale: 0.99,
  transition: { duration: 0.1 },
};

export const arrowTransition = {
  duration: 0.5,
  ease: [0.18, 0.72, 0, 0.67],
};
