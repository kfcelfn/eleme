import loadable from '@/utils/loadable.js'

const Errors = loadable( () => import('@/pages/404') );

export {
  Errors,
}