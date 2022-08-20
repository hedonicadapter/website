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

      marginTop: 1,
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

export const whileTap = {
  opacity: 0.8,
  scale: 0.99,
  transition: { duration: 0.1 },
};
