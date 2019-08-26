import React , {createContext} from 'react'
import portfolio from "../projects.json";

export const ProjectsContext = createContext();

 const ProjectsContextProvider = ({children}) => {
    return (
        <ProjectsContext.Provider value={portfolio} >
        {/* {console.log(ProjectsContext)} */}
            {children}
      </ProjectsContext.Provider>
    )
}

export default ProjectsContextProvider