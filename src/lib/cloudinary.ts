// src/lib/cloudinary.ts

export interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
}

export const uploadToCloudinary = async (file: File): Promise<CloudinaryResponse> => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary credentials are missing in .env file");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  // Optional: Organize into a specific folder
  formData.append("folder", "lucknow_ascent_uploads"); 

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Upload failed");
    }

    const data = await response.json();
    return data as CloudinaryResponse;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};

/**
 * Generates an optimized URL for a specific width/height
 * This allows you to store one high-res image and serve resized versions
 */
export const getOptimizedUrl = (url: string, width: number = 800) => {
  if (!url || !url.includes("cloudinary.com")) return url;
  
  // Insert transformation parameters before "upload/"
  const parts = url.split("/upload/");
  return `${parts[0]}/upload/w_${width},f_auto,q_auto/${parts[1]}`;
};