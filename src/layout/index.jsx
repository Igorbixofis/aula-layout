import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout ({ content }){
    return  (
        <>
        <Header/>1
        {content}
        <Footer/>
     </>
    )
}