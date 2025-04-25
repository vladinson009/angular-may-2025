export interface CreateFormShape {
  title: string;
  category: string;
  maxLevel: string;
  imageUrl: string;
  summary: string;
}
export interface GalleryShape extends CreateFormShape {
  _id: string;
  _ownerId: string;
  _createdOn: string;
}
