// console.log( Deno.cwd() );

// deno run main.ts
// deno run --allow-read main.ts

// const res = await fetch('https://fireship.io')


window.onload = e => console.log('hello');


const wasmBinary = new Uint8Array([0, 23, 77]);

const wasmModule = new WebAssembly.Module(wasmBinary);


// import { serve } from 'https://deno.land/std/http/server.ts';

// const s = serve({ port: 8000 });

// for await (const req of s) {
//   req.respond({ body: 'Deno Rocks!' });
// }


