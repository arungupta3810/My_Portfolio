import Home from './Components/Home/index'
import Contact from './Components/Contact'
import Project from './Components/Project'
import ProjectDetailTemplate from './Components/ProjectDetailTemplate'
import PageNotFound from './Components/PageNotFound'

export const route = [
  {
    id: 1,
    header: true,
    name: 'Home',
    path: '/',
    component: <Home />
  },
  {
    id: 2,
    header: true,
    name: 'Project',
    path: '/project',
    component: <Project />
  },
  {
    id: 3,
    header: true,
    name: 'Contact',
    path: '/contact',
    component: <Contact />
  },
  {
    id: 4,
    header: false,
    name: 'Project Details',
    path: '/project/:projectName',
    component: <ProjectDetailTemplate />
  },
  {
    id: 5,
    header: false,
    name: 'Page Not found',
    path: '*',
    component: <PageNotFound />
  },

]