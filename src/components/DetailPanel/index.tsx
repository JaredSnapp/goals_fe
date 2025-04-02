
interface DetailPanelProps {
  visible: boolean;
  children?: React.ReactNode;
}

export function DetailPanel({ visible, children }: DetailPanelProps) {

  return (
    <>
    {visible? 
      <div className={"flex bg-white border rounded-xl w-3/4 h-full m-2 p-4 cursor-pointer"}>
        <div className={"w-full h-full"}>
          {children}
        </div>
      </div>
      : <></>}
    </>

  );
}
