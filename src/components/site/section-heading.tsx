import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", align === "center" && "justify-center")}>
          {eyebrow}
        </span>
      )}
      <Tag
        className="mt-4 font-display text-3xl font-semibold leading-tight text-[#f5f0e8] sm:text-4xl md:text-5xl"
      >
        {title}
      </Tag>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-[#c4b9d6] sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
