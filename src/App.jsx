import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  // idea behind, undefined that if we start adding project we change it to null

  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId:null,

      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const ProjectId = Math.random();
      const newProject = {
        ...projectData,
        id: ProjectId,
      };
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }
  //console.log(projectsState);
  let content;
  if(projectsState.selectedProjectId ===null){
    content = <NewProject onAdd={handleAddProject}/>
  }else if(projectsState.selectedProjectId === undefined){
    content =<NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8" >
      <ProjectsSideBar onStartAddProject={handleStartAddProject}
       projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
