export type TDashboardState = {
  items: TItem[];
  filteredItems: TItem[];
  selectedItems: TItem[];
  lastModifiedTime: number;
};

export type TLabelCategory = 'Primary' | 'Secondary';

export type TItemNumber = {
  label: TLabelCategory;
  value: string;
};

export type TEmailId = {
  label: TLabelCategory;
  value: string;
};

export type TAddress = {
  label: string;
  value: string;
};

export type TBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'A+'
  | 'O-'
  | 'O+'
  | 'AB-'
  | 'AB+';

export type TItem = {
  // Specifies the possible values of the object of type TItem
  [key: string]:
    | string
    | number
    | TItemNumber[]
    | TEmailId[]
    | TAddress[]
    | undefined;
  id: string; // It would never change
  itemNumbers: TItemNumber[];
  itemStr: string;
  displayName: string;
  addresses?: TAddress[];
  bloodGroup?: TBloodGroup;
  emailIds?: TEmailId[];
  imageBase64Path?: string;
  imagePath?: string;
  jobTitle?: string;
  note?: string;
};

export type TLabeledItem = {
  index: number;
  value: string;
  label?: string;
  leftIcon?: string;
  leftIconColor?: string;
  leftIconType?: string;
  leftIconBrand?: boolean;
  leftIconCallback?: Function;
  rightIcon?: string;
  rightIconColor?: string;
  rightIconType?: string;
  rightIconBrand?: boolean;
  rightIconCallback?: Function;
};
