import { drawerProviderInjectionKey } from './context'
import { type DrawerCreateOptions, DrawerEnvironment } from './environment'

export type InstanceRefType = InstanceType<typeof DrawerEnvironment>

export const DrawerProvider = defineComponent({
  setup() {
    const drawerList = ref<Array<DrawerCreateOptions & { id: string; }>>([])
    const drawerInstRefs: Record<string, InstanceRefType | undefined> = {}

    const create = (options = {} as DrawerCreateOptions) => {
      const id = uuidv4()
      drawerList.value.push({
        ...options,
        id
      })
      return {
        hide: () => {
          drawerInstRefs[id]?.hideDrawer()
        }
      }
    }

    provide(drawerProviderInjectionKey, {
      create
    })

    const handleAfterLeave = async (key: string) => {
      drawerList.value.splice(
        drawerList.value.findIndex((v) => v.id === key),
        1
      )
    }

    return {
      drawerList,
      drawerInstRefs,
      handleAfterLeave
    }
  },
  render() {
    return <>
      {
        this.drawerList.map((drawerProps) => {
          return <DrawerEnvironment
            key={drawerProps.id}
            internalKey={drawerProps.id}
            onInternalAfterLeave={this.handleAfterLeave}
            ref={(
              (inst: InstanceRefType | null) => {
                if (!inst) {
                  delete this.drawerInstRefs[drawerProps.id]
                } else {
                  this.drawerInstRefs[drawerProps.id] = inst
                }
              }
            ) as any}
            {...drawerProps}
          />
        })
      }
      {this.$slots.default?.()}
    </>
  }
})
