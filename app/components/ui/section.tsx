

interface SectionProps {
  children: React.ReactNode;
  title: String
}

const Section: React.FC<SectionProps> = ( {
  children,
  title
}) => {
  return (
        <div className="flex justify-center max-w-[100rem] flex-col mx-auto my-20">
          <div className="text-4xl text-black tracking-widest text-center	">
            {title}
          </div>
          {children}
        </div>
   );
}

export default Section;
