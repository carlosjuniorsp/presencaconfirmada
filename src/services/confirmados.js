import { api } from './config'

export default {
    listar: () => {
        return api.get('confirmados')
    },
    salvar: (listaConfirmados) => {
        return api.post('confirmados', listaConfirmados)
    }
}
