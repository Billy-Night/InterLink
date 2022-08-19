import projectData from "../projectData";
import userData from "../userData";
import ProjectCard from "./ProjectCard";
import '../pages/Dashboard.css';
import TopNavBar from "./TopNavBar";

const UserTech = () => {

  const arrayOfArrays = projectData.map((project) => project.technologies);
  console.log(arrayOfArrays);

  let arrayWithDuplicates = [];
  const result = arrayOfArrays.forEach((array) => array.forEach((e) => userData.technologies.includes(e) ? arrayWithDuplicates.push(e) : null));
  console.log(arrayWithDuplicates);
  console.log(result);

  const matchArray = [...new Set(arrayWithDuplicates)];
  console.log(matchArray);

return( 
  <>
 <TopNavBar />
  <div id="dashboard__page">
        <header>
          <h1 className="project-name">Your Matched Projects</h1>
          <div className="search__field-and-btn">
            <input
              placeholder="contain text"
              type="text"
              className="search__field"
            />
            <button className="search__btn" />
          </div>
        </header>
 <div className="cards-container">
{  
  projectData.filter((project) => project.technologies.includes(...matchArray)).map((project, index) => (<ProjectCard key={index} {...project} />))
}
  </div>
  </div>
  </>
  );
}

export default UserTech;
