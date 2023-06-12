import LocaleInject from '@/plugins/LocaleInject'
import DiscreteModal from '@/plugins/DiscreteModal'

export default {
  install (app: App<any>) {
    app.use(LocaleInject)
    app.use(DiscreteModal)
  }
}
