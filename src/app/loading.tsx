import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/logo.png"
          alt="AZADE"
          width={120}
          height={50}
          className="animate-pulse"
        />
        <div className="h-px w-24 overflow-hidden bg-stone-200">
          <div className="h-full w-1/2 animate-[loader_1.2s_ease-in-out_infinite] bg-stone-900" />
        </div>
      </div>
    </div>
  );
}
