import Link from "next/link";
import { CONTAINER } from "@/lib/constants";

export default function BackToWork() {
  return (
    <Link
      href="/#work"
      className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 group"
    >
      <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
        ←
      </span>
      Back to Selected Work
    </Link>
  );
}

export function BackToWorkBar() {
  return (
    <div className={`${CONTAINER} pb-2`}>
      <BackToWork />
    </div>
  );
}
