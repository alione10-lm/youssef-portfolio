function Skills() {
  return (
    <div className="w-full  bg-slate-100   grid gap-4 grid-cols-2">
      <Title>Professional</Title>
      <Content>
        <p>
          MATLAB, Python, Origin, Aspen Plus and HYSYS, COMSOL Multiphysics,
          Gaussian
        </p>
        <p>Ms Office: Excel, Word, PowerPoint</p>
        <p>Adobe: Photoshop, Illustrator</p>
      </Content>
      <Content>
        Management <br /> Leadership <br /> Realiability <br /> Creativity
      </Content>
      <Title>Personal</Title>
      <Title>languages</Title>
      <Content>
        Arabic: Native <br />
        French: Advanced (C1) <br />
        English: Professional (B2) <br />
      </Content>
      <Content>content</Content>
      <Title>title</Title>
    </div>
  );
}

function Title({ children }) {
  return <p className="w-full h-full uppercase text-center   ">{children}</p>;
}
function Content({ children }) {
  return <div className="bg-blue-200 w-full h-full ">{children}</div>;
}

export default Skills;
