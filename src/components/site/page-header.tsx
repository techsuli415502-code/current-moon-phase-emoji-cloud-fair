interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="relative mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:px-8">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#f5f0e8] headline-glow sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#c4b9d6] sm:text-lg">
          {intro}
        </p>
      )}
    </header>
  );
}
