export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-[pageFade_500ms_ease-out]">{children}</div>;
}
