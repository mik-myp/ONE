import Middle from '../page/Middle'
import ArticleDetail from '../page/Details/Article'
import ProblemDetail from '../page/Details/Problem'
import PictureDetail from '../page/Details/Picture'
import Acercade from '../page/Acercade'
import { Navigate } from 'react-router-dom'
import Politica from '../page/Politica'
import Contacto from '../page/Contacto'

const routes = [
  {
    path: '/',
    element: <Middle />
  },
  {
    path: '/article/:id',
    element: <ArticleDetail />
  },
  {
    path: '/problem/:id',
    element: <ProblemDetail />
  },
  {
    path: '/one/:id',
    element: <PictureDetail />
  },
  {
    path: '/acercade',
    element: <Acercade />
  },
  {
    path: '/politica',
    element: <Politica />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/',
    element: <Navigate to="/" />
  }
]

export default routes