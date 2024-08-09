import React from "react";

function learn() {
    // Menggunakan props untuk mengambil data dan mengembalikan elemen h1 dengan teks yang dipersonalisasi

    function Greeting (props) {
        return <h1>Halo, {props.name}!</h1>;
    }
    return <>
         <div>
            <Greeting name="Abdul" />
        </div>
    </>
  }
  
  // Merender komponen "Greeting" dengan mengirimkan properti "name" sebagai props
  ReactDOM.render(<Greeting name="Abdul" />, document.getElementById('root'));