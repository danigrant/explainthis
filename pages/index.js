import { getAllConcepts } from '../components/Firebase'
import Link from 'next/link'
import AppContainer from '../components/AppContainer'
import MenuContainer from '../components/MenuContainer'
import TopWrapper from '../components/TopWrapper'

const Index = props => (
  <TopWrapper>
    <MenuContainer />
    <AppContainer>
      <h1>A list of all the concepts</h1>
      <ul>
        {props.concepts.map(concept => (
          <li key={concept.id}>
            <Link href="/explainthis/[id]" as={`/explainthis/${concept.concept}`}>
              <a>{concept.concept}</a>
            </Link>
          </li>
        ))}
      </ul>
    </AppContainer>
  </TopWrapper>
);

Index.getInitialProps = async function() {

  const data = await getAllConcepts(); // [{"id":"2Vwu1DWYmxG3DQ1GdT8u","concept":"emergence"},{"id":"vUauhHDGkBYj54DjAgLw","concept":"convexity"}]

  return {
    concepts: data.map(entry => entry.concept)
  };
};

export default Index;
