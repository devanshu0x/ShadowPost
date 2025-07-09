export function Background() {
  return (
    <div 
      className="fixed inset-0 -z-50 bg-black overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0),
          radial-gradient(circle at 25% 25%, rgba(139,69,19,0.03) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(75,85,99,0.02) 0%, transparent 60%)
        `,
        backgroundSize: "24px 24px, 400px 400px, 600px 600px",
        backgroundRepeat: "repeat, no-repeat, no-repeat",
        backgroundPosition: "0 0, 0 0, 100% 100%"
      }}
    >
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(0,0,0,0.9) 0%, 
              rgba(17,24,39,0.8) 30%,
              rgba(31,41,55,0.7) 60%,
              rgba(0,0,0,0.9) 100%
            )
          `
        }}
      />
    </div>
  );
}