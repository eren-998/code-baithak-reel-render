const path = require("path");
const fs = require("fs");
const { bundle } = require("@remotion/bundler");
const { renderStill, selectComposition } = require("@remotion/renderer");

async function main() {
  console.log("==> Bundling Jev AI Carousel project...");
  const serveUrl = await bundle({
    entryPoint: path.resolve(__dirname, "src/index.ts"),
  });
  console.log("==> Bundled successfully at:", serveUrl);

  const outDir = path.resolve(__dirname, "public/carousel_rendered");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const sdcardDir = "/mnt/sdcard/Download/code_baithak_carousel";
  if (!fs.existsSync(sdcardDir)) {
    fs.mkdirSync(sdcardDir, { recursive: true });
  }

  // Remove any old slides 7 and 8
  for (const f of ["slide_7.png", "slide_8.png"]) {
    try { fs.unlinkSync(path.join(outDir, f)); } catch(e){}
    try { fs.unlinkSync(path.join(sdcardDir, f)); } catch(e){}
  }

  for (let i = 1; i <= 6; i++) {
    const compId = `CarouselSlide${i}`;
    console.log(`==> Rendering ${compId} (Slide ${i} of 6)...`);
    const composition = await selectComposition({
      serveUrl,
      id: compId,
    });

    const outputPath = path.join(outDir, `slide_${i}.png`);
    await renderStill({
      composition,
      serveUrl,
      output: outputPath,
      imageFormat: "png",
    });

    // Copy immediately to phone storage
    fs.copyFileSync(outputPath, path.join(sdcardDir, `slide_${i}.png`));
    console.log(`[✓] Slide ${i} rendered and saved to ${outputPath}`);
  }

  console.log("==> ALL 6 JEV AI SLIDES SUCCESSFULLY RENDERED & COPIED!");
}

main().catch((err) => {
  console.error("Render failed:", err);
  process.exit(1);
});
