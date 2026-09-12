export default function AmbientBackground() {
  return (
    <div className="ambient-layer" aria-hidden>
      <div className="ambient-glow left-[-12%] top-[-15%] h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(59,130,246,0.28),transparent_70%)]" />
      <div className="ambient-glow right-[-14%] top-[28%] h-[480px] w-[480px] bg-[radial-gradient(circle,rgba(96,165,250,0.20),transparent_70%)]" />
      <div className="ambient-glow left-[18%] bottom-[-20%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_70%)]" />
    </div>
  );
}
