import FormView from '../views/FormView'

const tag = '[MainController]'

export default {
    init() {
        FormView.setup(document.querySelector('form'))
    }
}