import path from "node:path";
import {defineConfig} from 'vite'; 
export default defineConfig ({
root: "./src",
publicDir:"../public",
server:{port: 1234},
build: {
outDir:"../dist",

emptyOutDir:true,
}


})