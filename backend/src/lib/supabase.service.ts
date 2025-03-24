import { Injectable } from "@nestjs/common";
import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);


@Injectable()
export class SupabaseService {
  async uploadImage(filePath: string) {
    const fileName = path.basename(filePath);  
    const fileBuffer = fs.readFileSync(filePath);
    const { data } = supabase
    .storage
    .from('pokemon-image')
    .getPublicUrl('poke1.jpeg');
  
  console.log(data.publicUrl);
  
  
  }
}
