import { useState } from "react";
import { uploadImage } from "../utils/uploadImage";

const UploadComponent = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    const url = await uploadImage(image);
    setLoading(false);

    if (url) {
      setImageUrl(url);
      console.log("Uploaded Image URL:", url);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        disabled={!image || loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" className="w-32 h-32 object-cover" />}
    </div>
  );
};

export default UploadComponent;
