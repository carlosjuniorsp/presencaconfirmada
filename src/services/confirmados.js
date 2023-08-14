import { Script } from 'vm'
import { http} from './config'

export default {
    listar:() => {
        return http.get('confirmados')
    }
}
