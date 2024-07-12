export default function Cursor({value, valueY, click, show, cursorClicked, setCursorClicked}) {

  const cursorSize = cursorClicked ? 15 : (click ? 25 : 35);
  const backgroundColor = show ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.3)';

  return (
    <div>
      <div
        style={{
          left: `${value - 80}px`,
          background: `${!show ? "radial-gradient(#4BC1E660 0%, #0D202700 80%)" : 'transparent'}`,
          pointerEvents: "none",
          top: `${valueY - 80}px`,
        }}
        className="fixed flex justify-center z-40 items-center size-40 rounded-full">
        <div
          style={{
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            backgroundColor,
            transition: 'width 0.2s, height 0.2s',
          }}
          className="rounded-full">
        </div>
      </div>
    </div>
  )
}
