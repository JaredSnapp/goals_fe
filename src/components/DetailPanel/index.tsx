import { Card } from "../Card";

interface DetailPanelProps {
  visible: boolean;
  children?: React.ReactNode;
}

export function DetailPanel({ visible, children }: DetailPanelProps) {

  return (
    <>
    {visible? 
    <Card className={"flex w-3/4 h-full m-2 p-4 cursor-pointer"}>
        <div className={"w-full h-full"}>
          {children}
        </div>
      </Card>
      : <></>}
    </>

  );
}
