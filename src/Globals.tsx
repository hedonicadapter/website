import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiFirebase } from 'react-icons/si';
import { HiDatabase } from 'react-icons/hi';
import { FaPython } from 'react-icons/fa';
import { SiJava } from 'react-icons/si';

const recent = 0.86;
const old = 0.6;
const oldest = 0.38;

export const ReactIcon = () => (
  <RiReactjsLine style={{ marginInline: -5, marginTop: -1 }} size={23} />
);

export const TypeScriptIcon = () => (
  <span
    className='no-select'
    style={{
      // transform: 'scale(1, 0.9) translateY(-22%)',
      color: 'rgba(14, 14, 14, 1)',
      fontSize: '0.7em',
      fontWeight: 'bold',
      backgroundColor: 'rgba(255, 255, 255, 0.87)',
      borderRadius: 1,

      paddingBottom: 1,
      paddingLeft: 3,
      paddingRight: 1,
      paddingTop: 3,

      marginTop: 2,
      marginRight: 2,
      marginLeft: -1,
    }}
  >
    TS
  </span>
);

export const minglerStack = [
  {
    icon: <ReactIcon />,
    title: 'React',
  },
  { icon: <SiMongodb size={21} />, title: 'MongoDB' },
  {
    icon: <TypeScriptIcon />,
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
  { icon: <SiFirebase size={21} />, title: 'Firestore' },
];

export const languages = [
  {
    icon: <ReactIcon />,
    title: 'React & React Native',
    rating: 'max',
  },
  { icon: <SiMongodb size={21} />, title: 'MongoDB', rating: 'high' },
  {
    icon: <HiDatabase size={23} />,
    title: 'SQL',
    rating: 'low',
    opacity: old,
  },
  {
    icon: <SiJava size={24} />,
    title: 'Java',
    rating: 'mid',
    opacity: old,
  },
  {
    icon: <FaPython size={21} />,
    title: 'Python',
    rating: 'mid',
    opacity: recent,
  },
  {
    icon: (
      <span
        style={{
          transform: 'scale(0.8, 0.9) translateY(-56%)',
          top: '56%',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          position: 'relative',
          lineHeight: '0.6rem',
          marginBottom: -11,
          paddingBottom: -10,
        }}
      >
        .NET
        <br />
        <span style={{ fontSize: '0.7rem', marginLeft: 2 }}>core</span>
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
