use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str){
    alert(name);
}

//wasm-pack --target web


#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}