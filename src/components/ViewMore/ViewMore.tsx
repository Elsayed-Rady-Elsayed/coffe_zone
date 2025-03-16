type ViewMoreProps = {
  text: string;
  link?: string;
};
const ViewMore = ({ text, link }: ViewMoreProps) => {
  return (
    <a
      href={link}
      className="my-[2rem] bg-orange-600 w-fit self-center p-1 text-lg md:px-4 md:py-3 rounded-full md:text-2xl font-light cursor-pointer hover:scale-105 dark:text-white "
    >
      {text}
    </a>
  );
};

export default ViewMore;
