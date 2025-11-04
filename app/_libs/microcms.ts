export type CategoryType ={
  name:string;
}
export type News = {
  id: string;
  title: string;
  category: { name: string };
  publishedAt: string;
  createAt: string;
};
