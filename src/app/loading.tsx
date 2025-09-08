import Image from "next/image"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-end">
        <Image
          src="/logo/OhanaBlack.png"
          alt="Ohana logo"
          width={96}
          height={96}
          priority
          className="animate-bounce-ball select-none"
        />
        <div className="mt-2 w-20 h-2 rounded-full bg-black/40 blur-[3px] animate-shadow" />
      </div>

      <style>{`
        @keyframes bounceBall {
          0%, 100% { transform: translateY(25px) scale(1); }
          50% { transform: translateY(-78px) scale(1.02, 0.98); }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scale(1);  }
          50% { transform: scale(0.8); opacity: 0.15; }
        }
        .animate-bounce-ball { animation: bounceBall 1.2s ease-in-out infinite; }
        .animate-shadow { animation: shadowPulse 1.2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}