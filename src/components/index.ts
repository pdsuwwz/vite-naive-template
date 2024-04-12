// Vue Component Install

import IconFont from '@/components/IconFont/index.vue'
import LayoutArea from '@/components/Layout/LayoutArea.vue'
import LayoutSection from '@/components/Layout/LayoutSection.vue'
import Footer from '@/components/Footer/index.vue'

const componentList = [
  IconFont,
  LayoutArea,
  LayoutSection,
  Footer
]

const Components = {
  install (app: App<any>) {
    componentList.forEach((Comp) => {
      app.component(Comp.name!, Comp)
    })
  }
}


export default Components
