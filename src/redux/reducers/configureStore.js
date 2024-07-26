import { createStore } from "redux";
import reducers from "./index";

//state veri tabanı gibi düşünebiliriz.

export default function configureStore(){
    return createStore(reducers);
}

//Redux Toolkit kullanmak, Redux ile çalışmayı daha kolay ve anlaşılır hale getirir. 
//createStore hala mevcut ve kullanılabilir olmasına rağmen,
// Redux Toolkit'in configureStore fonksiyonunu kullanmak daha iyi bir yaklaşımdır.