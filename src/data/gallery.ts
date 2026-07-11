export type GalleryImage = {
  alt: string;
  height?: number;
  id: string;
  src: string;
  title: string;
  width?: number;
};

export type GalleryAlbum = {
  id: string;
  images: GalleryImage[];
  title: string;
};

export { galleryAlbums } from "./gallery.generated";
