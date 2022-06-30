import projectData from "../projectData";
import userData from "../userData";
import ProjectCard from "./ProjectCard";

const UserTech = () => {
  // const arrayWithDuplicates = projectData.map((element) => element.technologies).filter((match) => userData.technologies.includes(match));

  // const JS = "Javascript";
  // const otherArray = projectData.filter((element) => element.technologies.includes(JS));
  // console.log(otherArray);

  // projectData.filter((project) => userData.technologies.includes(project.technologies))

  const arrayOfArrays = projectData.map((project) => project.technologies);
  console.log(arrayOfArrays);

  let arrayWithDuplicates = [];
  const result = arrayOfArrays.forEach((array) => array.forEach((e) => userData.technologies.includes(e) ? arrayWithDuplicates.push(e) : null));
  console.log(arrayWithDuplicates);

  const matchArray = [...new Set(arrayWithDuplicates)];
  console.log(matchArray);

  for (let i = 0; i < matchArray.length; i++) {

  }

  // matchArray.forEach((e) => projectData.technologies.includes(e) ? <FullCard {... projectData} /> : null)
return(  
  <>
{  
  projectData.filter((project) => project.technologies.includes(...matchArray)).map((project, index) => (<ProjectCard key={index} {...project} />))
}
  </>
  );

  //* test version
  //* {  
  //*   matchArray.forEach((element) => {projectData.filter((project) => project.technologies.includes(element)).map((project, index) => (<ProjectCard key={index} {...project} />))}) 
  //* }


  // console.log(result);
  // console.log(arrayWithDuplicates);

  // map over projectData, get technologies array and check if 
  
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
}

export default UserTech;
