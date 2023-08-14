import { http } from './config'

export default {
    listar: () => {
        return http.get('confirmados')
    },
    salvar: (listaConfirmados) => {
        return http.post('confirmados', listaConfirmados)
    }

}
