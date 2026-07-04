export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #42ccff 1px, transparent 1px), linear-gradient(to bottom, #42ccff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, hsl(var(--background)) 90%)' }} />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px] animate-pulse delay-1000" />
    </div>
  );
}
