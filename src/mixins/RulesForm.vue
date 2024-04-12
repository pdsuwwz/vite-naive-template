<script lang="ts">
import {
  imageListRules,
  requiredEmailRules,
  requiredRadioRules,
  requiredRules,
  validatorRules
} from '@/utils/formRules'
export default defineComponent({
  // name: 'RulesForm',
  methods: {
    getValidatorRules (...args: any[]) {
      return validatorRules(...args)
    },
    getRequiredRules (...args: any[]) {
      return requiredRules(...args)
    },
    getRequiredRadioRules (...args: any[]) {
      return requiredRadioRules(...args)
    },
    getRequiredEmailRules (...args: any[]) {
      return requiredEmailRules(...args)
    },
    getImageListRules (...args: any[]) {
      return imageListRules(...args)
    }
  }
})
</script>
