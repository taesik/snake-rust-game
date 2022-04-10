use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen]
pub struct World {
    pub width: usize
}
#[wasm_bindgen]
impl World {
    pub fn new() -> World {
        World {
            width:8
        }
    }
}


//wasm-pack build --target web