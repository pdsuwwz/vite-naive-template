import { enUS } from 'naive-ui'
import { systemTitle } from '@/locales/data'

/* English namespaced */
export default {
  ...enUS,
  base: {
    systemTitle: systemTitle,
    goback: 'Back to the previous page',
    empty: 'No data available',
    pleaseInput: 'Please Input'
  },
  login: {
    hydl: 'Hi, Welcome',
    signin: 'Sign In',
    username: 'Username',
    email: 'Email',
    pwd: 'Password',
    fgtpwd: 'Forgot password?',
    plsemail: 'Please enter a email',
    plscurrentemail: 'Please enter the correct email',
    plspwd: 'Please enter a password',
    signout: 'Sign out',
    logingSuccess: 'Successful'
  },
  project: {
    manageTitle: 'Project management',
    create: 'New Project',
    confirmCreate: 'Create Project',
    companyName: 'Company Name',
    remark: 'Remark',
    name: 'Project name',
    createDate: 'Create date',
    state: 'State',
    publish: 'Publish',
    stop: 'Stop',
    publishedSuccessfully: 'Published Successfully',
    publishingStop: 'Stop Publishing'
  },
  result: {
    title: 'Project details'
  }
}
