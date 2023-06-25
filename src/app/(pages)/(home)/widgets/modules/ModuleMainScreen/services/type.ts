interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

interface ImageAttributes {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

interface Attributes {
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  TitlePresantation: string;
  TextPresantation: string;
  Image: {
    data: {
      id: number;
      attributes: ImageAttributes;
    };
  };
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

export interface Response {
  data: Data[];
  meta: Meta;
}
