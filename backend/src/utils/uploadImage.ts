import { supabase } from "../lib/supabase";

export const uploadImage = async (file: File) => {
  if (!file) return null;

  const filePath = `images/${file.name}`;
  const { data, error } = await supabase.storage.from("pokemon").upload(filePath, file, {
    cacheControl: "3600", 
    upsert: true,
  });

  if (error) {
    console.error("Upload error:", error);
    return null;
  }

  
  const { data: publicUrl } = supabase.storage.from("pokemon").getPublicUrl(filePath);
  return publicUrl.publicUrl;
};
