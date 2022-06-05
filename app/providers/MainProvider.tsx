import Layout from "@/components/layout/Layout"
import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

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
    <QueryClientProvider client={queryClient}>
      <Layout>
        {children}
      </Layout>
    </QueryClientProvider>
  )
}

export default MainProvider