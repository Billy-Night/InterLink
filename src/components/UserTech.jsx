import projectData from "../projectData";
import userData from "../userData";

const UserTech = () => {
  // const finalArray = projectData.map((element) => element.technologies).filter((match) => userData.technologies.includes(match));

  // const JS = "Javascript";
  // const otherArray = projectData.filter((element) => element.technologies.includes(JS));
  // console.log(otherArray);

  // projectData.filter((project) => userData.technologies.includes(project.technologies))

  const arrayOfArrays = projectData.map((project) => project.technologies);
  console.log(arrayOfArrays);

  let finalArray = [];
  const result = arrayOfArrays.forEach((array) => array.forEach((e) => userData.technologies.includes(e) ? finalArray.push(e) : null));

  console.log(result);
  console.log(finalArray);
  
  // array.filter((tech) => userData.technologies.includes(tech)));
  // console.log(result);


  // {quoteList
  //   .filter(
  //     (family) =>
  //       !simpsonsFamilyOnly || family.character.includes('Simpson')
  //   )
  //   .map((quote, index) => (
  //     <QuoteCard key={index} {...quote} />
  //   ))}
  


  return(
    <div>
      <p>Test</p>
    {/* <ul>
    {finalArray.map((e) => <li>{e}</li>)}
    </ul> */}
    </div>
  )
}

export default UserTech;
