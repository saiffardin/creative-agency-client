export interface ServiceType {
  _id?: string;
  description?: string;
  title?: string;
  img: {
    contentType?: string;
    imgType?: string;
    size?: string;
  };
}
