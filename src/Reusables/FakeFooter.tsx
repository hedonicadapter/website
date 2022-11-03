const FakeFooter = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: -1,

        height: 71, // 1 because there's a weird bottom margin of 1px below
        width: '100vw',

        backgroundColor: color,
        zIndex: 1,
        // expanded === 0 ? '#201c1c' : '#fffff2',
      }}
    />
  );
};

export default FakeFooter;
