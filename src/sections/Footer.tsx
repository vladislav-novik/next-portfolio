import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const links = [
  { title: "Twitter", href: "https://twitter.com" },
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "GitHub", href: "https://github.com" },
  { title: "Instagram", href: "https://instagram.com" },
];

export const Footer = () => (
  <footer className="relative overflow-x-clip">
    <div
      className="absolute h-[400px] w-[1600px] 
    bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-emerald-300/30
    [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"
    ></div>
    <div className="container">
      <div className="border-t border-white/15 text-sm py-6 flex flex-col md:flex-row md:justify-between gap-8 items-center">
        <p className="text-white/40">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-green-500 transition-colors group"
            >
              <span className="font-semibold">{link.title}</span>
              <ArrowUpRightIcon className="size-4 group-hover:animate-move-up-right" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>
);
