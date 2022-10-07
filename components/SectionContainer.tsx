type Props = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  return <div className={`container mx-auto px-8 md:px-0`} >{children}</div>;
};
export default SectionContainer;
