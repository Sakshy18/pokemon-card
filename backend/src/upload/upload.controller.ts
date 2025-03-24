import { Controller, Post, Body } from "@nestjs/common";
import { SupabaseService } from "src/lib/supabase.service";

@Controller("upload")
export class UploadController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Post()
  async uploadImage(@Body("filePath") filePath: string) {
    const imageUrl = await this.supabaseService.uploadImage(filePath);
    return { imageUrl };
  }
}
