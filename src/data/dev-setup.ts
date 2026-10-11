export interface SpecItem {
  label: string;
  value: string;
}

export const devSetup = {
  model: "Dell G15 5530",
  specs: [
    {
      label: "Processor",
      value: "Intel Core i5-13450HX — 13th Gen, 10 cores, up to 4.6 GHz",
    },
    {
      label: "Graphics",
      value: "NVIDIA GeForce RTX 3050, 6GB GDDR6",
    },
    {
      label: "Display",
      value: "15.6\" FHD, 120Hz",
    },
  ] as SpecItem[],
  // RAM and storage vary by exact configuration and weren't confirmed —
  // add a spec object here once you know yours, e.g.:
  // { label: "Memory", value: "16GB DDR5" }
};
