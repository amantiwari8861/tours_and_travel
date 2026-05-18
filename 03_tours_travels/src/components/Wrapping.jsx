const Wrapping = () => {
  return (
    <OuterDiv>
      <InnerDiv name="Aman Tiwari" />
      <InnerDiv name="Rahul Tiwari" />
      <InnerDiv name="Ravi Tiwari" />
      <InnerDiv name="Anurag Tiwari" />
    </OuterDiv>
  );
};

export default Wrapping;

const OuterDiv = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl text-center">List Of People</h1>
      <ul className="list-disc px-10">{children}</ul>
    </>
  );
};

const InnerDiv = ({ name }) => {
  return <li>{name}</li>;
};
