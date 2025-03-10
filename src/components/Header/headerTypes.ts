type HeaderOfferProps = {
  text: string;
  link: string;
};

const linkVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export type { HeaderOfferProps };
export { linkVariants };
