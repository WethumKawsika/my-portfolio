/**
 * Ambient animated gradient blobs used as a section backdrop.
 * Purely decorative — marked aria-hidden and pointer-events none.
 */
export default function AnimatedBackground({ variant = "default" }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-[100px] animate-blob" />
      <div
        className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px] animate-blob"
        style={{ animationDelay: "3s" }}
      />
      {variant === "default" && (
        <div
          className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-secondary/15 blur-[100px] animate-blob"
          style={{ animationDelay: "6s" }}
        />
      )}
    </div>
  );
}
