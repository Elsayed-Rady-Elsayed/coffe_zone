type ViewMoreProps = {
  text: string;
  link?: string;
};
const ViewMore = ({ text, link }: ViewMoreProps) => {
  return (
    <a
      href={link}
      className="my-[2rem] bg-orange-600 w-fit self-center px-4 py-3 rounded-full text-2xl font-light cursor-pointer hover:scale-105 dark:text-white"
    >
      {text}
    </a>
  );
};

export default ViewMore;
