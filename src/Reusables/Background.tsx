import background from '../assets/background.png';

const Background = () => (
  <div
    className='testone no-select'
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      zIndex: -1,
    }}
  >
    <img
      src={background}
      className='test'
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        filter: '',
      }}
    />
  </div>
);

export default Background;
