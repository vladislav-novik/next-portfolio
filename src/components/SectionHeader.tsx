export const SectionHeader = ({
  title,
  eyebrow,
  description
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => (
  <>
    <div className="flex justify-center">
      <p
        className="uppercase font-semibold tracking-widest 
        bg-gradient-to-r from-green-500 to-sky-400
        text-transparent bg-clip-text text-center"
      >
        {eyebrow}
      </p>
    </div>
    <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
    <p
      className="text-center md:text-lg lg:text-xl
       text-white/60 mt-4 max-w-md mx-auto"
    >
      {description}
    </p>
  </>
);
