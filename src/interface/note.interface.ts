export interface INotes {
  notes: INote[];
  status: string;
}
export interface INote {
  title: string;
  description: string;
  type: string;
}
export interface IChangeNote {
  old: {
    title: string;
    description: string;
    type: string;
  };
  new: {
    title: string;
    description: string;
    type: string;
  };
}
