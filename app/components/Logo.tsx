import Image from "next/image";

/* Brand wordmark (trimmed from motionlogo.png → public/brandmark.png). */
export default function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brandmark.png"
      alt="Motion Media Marketing"
      width={1080}
      height={373}
      priority
      className={className}
    />
  );
}
