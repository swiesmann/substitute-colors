import colorsea from 'colorsea'

export function replaceColors(): void {
  const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
  const color2 = colorsea.lab(79, 28, 100) // Sample color

// CMC(1:1)
  color1.deltaE(color2, 'CMC') // 5.754...

// CMC(2:1) formula, just set the weight factor l to 2 (c defaults to 1)
  console.log(color1.deltaE(color2, 'CMC', { l: 2 })) // 5.719...

// CIE2000
  console.log(color1.deltaE(color2, 'CIE2000')) // 3.6815...

// CIE1994
  console.log(color1.deltaE(color2, 'CIE1994')) // 3.3725...

// CIE1976
  console.log(color1.deltaE(color2, 'CIE1976')) // 20.1246...
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  replaceColors()
}
