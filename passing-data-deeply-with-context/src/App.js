import "./App.css";
import Section from "./components/Section";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
        <br />
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
        {/* <Heading level={5}>Sub-sub-sub-heading</Heading>
      <Heading level={6}>Sub-sub-sub-sub-heading</Heading> */}
      </Section>
      <br />
      <Section>
        <Heading>Title</Heading>
      </Section>
    </>
  );
}

export default App;
