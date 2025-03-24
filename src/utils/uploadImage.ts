export const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
  
    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
    return data.imageUrl; // Supabase image URL
  };
  