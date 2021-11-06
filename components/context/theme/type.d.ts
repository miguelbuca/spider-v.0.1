interface iTheme{
    colors: {
      default: string,
      opacity: string,
      main: string
    },
    padding?: {
      default: '2rem'
    }
}
export interface ContextProps<T>{
    theme: any,
    setTheme?: any,
    defaultValue?: T 
}