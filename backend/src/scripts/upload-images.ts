import { SupabaseService } from "../lib/supabase.service";
import * as fs from "fs";
import * as path from "path";

const supabaseService = new SupabaseService();

async function uploadAllImages() {
  const imagesFolder = path.join(__dirname, "../assets/pokemon");
  const imageFiles = fs.readdirSync(imagesFolder);

  for (const fileName of imageFiles) {
    const filePath = path.join(imagesFolder, fileName);
    try {
      const publicUrl = await supabaseService.uploadImage(filePath);
      console.log(`Uploaded: ${fileName} -> ${publicUrl}`);
    } catch (error) {
      console.error(`Failed to upload ${fileName}:`, error);
    }
  }
}

uploadAllImages();
