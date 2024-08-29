export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(198 252 166)" />
            <stop offset="100%" stopColor="rgba(167, 252, 238, .7400000095367432)" />
        </linearGradient>
      </svg>
    </>
  );
};
