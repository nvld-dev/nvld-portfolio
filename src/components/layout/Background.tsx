export default function Background() {
  return (
    <>
      {/* Grid */}
      <div className="fixed inset-0 -z-50 bg-grid" />

      {/* Aurora Glow */}
      <div className="fixed left-1/2 top-[-250px] -z-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px] animate-aurora" />

      {/* Blur Kiri */}
      <div className="fixed left-[-150px] top-[35%] -z-40 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Blur Kanan */}
      <div className="fixed right-[-150px] bottom-[10%] -z-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Noise */}
      <div className="fixed inset-0 -z-30 opacity-[0.025] bg-noise pointer-events-none" />
    </>
  );
}
