import {AuthProvider} from "../auth";
import { ThemeProvider, CSSReset } from "@chakra-ui/react"; 

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider>
      <CSSReset/>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
