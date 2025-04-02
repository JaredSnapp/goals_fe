

interface PageProps {
  children?: React.ReactNode;
}

export function Page({ children }: PageProps) {

  return (
    // <div className={"flex h-[calc(100vh-40px)] p-2"}>
    <div className={"flex h-full p-2"}>
      {children}
    </div>

  );
}
