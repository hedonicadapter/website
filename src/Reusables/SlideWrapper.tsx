import '../styles/SlideWrapper.css';

type SlideWrapperProps = {
  children: JSX.Element;
};
export const SlideWrapper = ({ children }: SlideWrapperProps) => {
  return <div className='slide-wrapper'>{children}</div>;
};
