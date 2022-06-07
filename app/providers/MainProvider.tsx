import Layout from "@/components/layout/Layout"
import { store } from "@/store/store"
import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import HeadProvider from "./HeadProvider/HeadProvider"
import ReduxToast from "./ReduxToast"

interface MainProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const MainProvider:FC<MainProviderProps> = ({children}) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast />
          <Layout>
            {children}
          </Layout>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  )
}

export default MainProvider