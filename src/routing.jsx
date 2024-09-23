import Home from '../src/Components/Home/index'
import Contact from './Components/Contact'
import Project from './Components/Project'

export const route = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    component: <Home />
  },
  {
    id: 2,
    name: 'Contact',
    path: '/contact',
    component: <Contact />
  },
  {
    id: 3,
    name: 'Project',
    path: '/project',
    component: <Project />
  },
]