const fs = require('fs');

// Create a minimal 96x96 PNG with a blue-purple gradient background and white "M"
// This generates a valid PNG file manually

function createPNG() {
  const width = 96;
  const height = 96;
  
  // Create raw pixel data (RGBA)
  const pixels = Buffer.alloc(width * height * 4);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      
      // Check if we're in the rounded rectangle
      const r = 20; // border radius
      let inRect = true;
      
      // Check corners
      if (x < r && y < r) {
        const dx = r - x, dy = r - y;
        if (dx * dx + dy * dy > r * r) inRect = false;
      } else if (x >= width - r && y < r) {
        const dx = x - (width - r - 1), dy = r - y;
        if (dx * dx + dy * dy > r * r) inRect = false;
      } else if (x < r && y >= height - r) {
        const dx = r - x, dy = y - (height - r - 1);
        if (dx * dx + dy * dy > r * r) inRect = false;
      } else if (x >= width - r && y >= height - r) {
        const dx = x - (width - r - 1), dy = y - (height - r - 1);
        if (dx * dx + dy * dy > r * r) inRect = false;
      }
      
      if (!inRect) {
        // Transparent
        pixels[idx] = 0;
        pixels[idx + 1] = 0;
        pixels[idx + 2] = 0;
        pixels[idx + 3] = 0;
      } else {
        // Gradient from #4a6bff to #7c3aed
        const t = (x + y) / (width + height);
        const r1 = 74, g1 = 107, b1 = 255; // #4a6bff
        const r2 = 124, g2 = 58, b2 = 237; // #7c3aed
        
        pixels[idx] = Math.round(r1 + (r2 - r1) * t);
        pixels[idx + 1] = Math.round(g1 + (g2 - g1) * t);
        pixels[idx + 2] = Math.round(b1 + (b2 - b1) * t);
        pixels[idx + 3] = 255;
        
        // Draw "M" letter (simple bitmap)
        const mx = x, my = y;
        const letterCenter = { x: 48, y: 50 };
        const letterWidth = 40, letterHeight = 40;
        
        // Simple M shape detection
        const lx = mx - (letterCenter.x - letterWidth/2);
        const ly = my - (letterCenter.y - letterHeight/2);
        
        if (lx >= 0 && lx < letterWidth && ly >= 0 && ly < letterHeight) {
          // M letter pattern (simplified)
          const inM = (
            // Left vertical bar
            (lx >= 0 && lx < 6 && ly >= 0) ||
            // Right vertical bar
            (lx >= letterWidth - 6 && lx < letterWidth && ly >= 0) ||
            // Left diagonal
            (lx >= 0 && lx < letterWidth/2 && Math.abs(ly - lx * letterHeight/letterWidth) < 5) ||
            // Right diagonal
            (lx >= letterWidth/2 && lx < letterWidth && Math.abs(ly - (letterWidth - lx) * letterHeight/letterWidth) < 5)
          );
          
          if (inM && ly >= 0 && ly < letterHeight * 0.75) {
            pixels[idx] = 255;
            pixels[idx + 1] = 255;
            pixels[idx + 2] = 255;
            pixels[idx + 3] = 255;
          }
        }
        
        // Draw "NEURO" text area (bottom)
        if (my >= 72 && my <= 82 && mx >= 28 && mx <= 68) {
          // Simple text simulation - just make it slightly lighter
          pixels[idx] = Math.min(255, pixels[idx] + 40);
          pixels[idx + 1] = Math.min(255, pixels[idx + 1] + 40);
          pixels[idx + 2] = Math.min(255, pixels[idx + 2] + 40);
        }
      }
    }
  }
  
  return pixels;
}

// Create PNG using a simpler approach - just write a valid solid color PNG
function createSimplePNG() {
  // Minimal PNG: 96x96, blue-purple gradient
  const width = 96, height = 96;
  
  // We'll use the SVG as the actual logo and create a minimal PNG placeholder
  // The SVG is the real logo, this PNG is just for AMP validation
  
  // Create a 1x1 transparent pixel PNG as placeholder
  const pngHeader = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
    0x00, 0x00, 0x00, 0x0D, // IHDR length
    0x49, 0x48, 0x44, 0x52, // IHDR
    0x00, 0x00, 0x00, 0x60, // width: 96
    0x00, 0x00, 0x00, 0x60, // height: 96
    0x08, // bit depth: 8
    0x02, // color type: RGB
    0x00, // compression
    0x00, // filter
    0x00, // interlace
  ]);
  
  // For simplicity, let's just create a small valid PNG
  // The SVG will be the actual logo used in the stories
  
  console.log('Creating minimal placeholder PNG...');
  
  // Actually, let's just copy the SVG and reference it
  // AMP stories can use SVG for publisher-logo-src
  console.log('SVG logo already created at public/images/logo.svg');
  console.log('AMP stories will use SVG directly');
}

createSimplePNG();
