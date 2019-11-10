import { getAllConcepts } from '../components/Firebase'
import Link from 'next/link'
import AppContainer from '../components/AppContainer'

const Index = props => (
  <AppContainer>
    <h1>A list of all the concepts</h1>
    <ul>
      { console.log(props) }
    </ul>
  </AppContainer>
);

Index.getInitialProps = async function() {
  const res = await getAllConcepts();

  console.log(`Show data fetched: ${res}`);

  return {
    concepts: res
  };
};

export default Index;

// {props.concepts.map(concept => (
//   <li key={concept.id}>
//     <Link href="/explainthis/[id]" as={`/explainthis/${concept.id}`}>
//       <a>{concept.concept}</a>
//     </Link>
//   </li>
// ))}
