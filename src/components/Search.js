// import Downshift, { resetIdCounter } from 'downshift';
// import debounce from 'lodash.debounce';
import React from 'react';
import styled from 'styled-components';

const SearchStyles = styled.div`
  position: relative;
  margin: 0 auto;
  input {
    padding: 2rem;
    font-size: 2rem;
    border-color: ${({ theme }) => theme.green};
    text-align: center;
    &:focus {
      border-color: ${({ theme }) => theme.primary};
      outline: none;
    }
  }
`;
// export const query = graphql`
//   query{ allStrapiRecette {
//      recettes:nodes {
//       id
//       title
//       image {
//         url
//       }
//     }}
//   }

// `;

const AutoComplete = () => {
//   const {allStrapiRecette} = useStaticQuery(query)
// console.log(allStrapiRecette);

//   const emptyQuery = ""

//   const [search, setSearch] = useState({
//     filteredData: [],
//     query: emptyQuery,
//   })


//   const handleInputChange = e => {
//     const query = e.target.value
//     const recipes = allStrapiRecette.recettes || []
//     const filteredData = recipes.filter(recipe => {
//       const { title } = recipe
//       return (title.toLowerCase().includes(query.toLowerCase()) || [])
//       })

//     setSearch({
//       query,
//       filteredData,
//     })
//   }

//   const { filteredData, query } = search
//   const hasSearchResults = filteredData && query !== emptyQuery
//   const recipes = hasSearchResults ? filteredData : []
// console.log(recipes);


 return  (<SearchStyles>
        <input type="search" name="search" placeholder="🔎Une Recette ?"  />
  </SearchStyles>
)
}
// const AutoComplete = () => {
//   const {recette:{nodes:result}} = useStaticQuery(query)
// const handleChange = item => {
//   navigate(`/recettes/${item.title.split(" ").join("-")}`, {state: {id: item.id}})

// };

//   const findItemsButSlowly = debounce(result, 300);
//   resetIdCounter();
//   return (
//     <SearchStyles>
//       <Downshift
//         onChange={handleChange}
//         itemToString={item => (item === null ? '' : item.title)}
//       >
//         {({
//           getInputProps,
//           getItemProps,
//           isOpen,
//           inputValue,
//           highlightedIndex,
//         }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 type: 'search',
//                 placeholder: 'Une Recette ?',
//                 id: 'search',
//                 // className: loading ? 'loading' : 'input',
//                 onChange: e => {
//                   e.persist();
//                   findItemsButSlowly({
//                     variables: { searchTerm: e.target.value },
//                   });
//                 },
//               })}
//             />

//             {isOpen && (
//               <DropDown>
//                 {result.map((item, index) => {
//                   const { image } = item;
//                   const [firstImage] = image;
//                   return (
//                     <DropDownItem
//                       {...getItemProps({ item })}
//                       key={item.id}
//                       highlighted={index === highlightedIndex}
//                     >
//                       <img width="50" src={firstImage.url} alt={item.title} />
//                       {item.title}
//                     </DropDownItem>
//                   );
//                 })}
//                 {!result.length && (
//                   <DropDownItem>
//                     Oulalalah!! Nous n'avons pas encore de recette pour{' '}
//                     {inputValue}
//                   </DropDownItem>
//                 )}
//               </DropDown>
//             )}
//           </div>
//         )}
//       </Downshift>
//     </SearchStyles>
//   );
// };



export default AutoComplete;





