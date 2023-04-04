import "./kitap.css"

function Kitap({kitap}) {
   
   return(
      <div className="kitap-cerceve">
         <p>{kitap.ad}</p>
         <p>{kitap.yazar}</p>
         <p>{kitap.fiyat} TL</p>
      </div>
   )
}
export default Kitap;