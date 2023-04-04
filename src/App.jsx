import Kitap from "./Kitap";
import kitaplar from "./data";


function App() {



   return(
    <>
      {  kitaplar.map(  bilgi=> <Kitap kitap={bilgi} />  )  }

    </>
   )
}

export default App;