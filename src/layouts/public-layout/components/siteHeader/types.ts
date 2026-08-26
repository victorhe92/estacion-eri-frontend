interface SubCategory {
  label: string;
  href: string;
}

export interface MenuContent {
  label: string;
  href: string;
  children: SubCategory[];
}
