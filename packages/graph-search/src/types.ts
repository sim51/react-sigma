import { ReactNode } from 'react';

export type ItemType = 'nodes' | 'edges';

export type Document = { itemId: string; id: string; type: ItemType; label?: string | null } & {
  [key: string]: unknown;
};

export interface OptionItem {
  id: string;
  type: ItemType;
}

export interface OptionMessage {
  type: 'message';
  message: ReactNode;
  action?: () => void;
}

export type GraphSearchOption = OptionItem | OptionMessage;

export type LabelKeys = 'no_label' | 'no_result_found' | 'type_something_to_search' | 'placeholder';
export type Labels = { [Key in LabelKeys]?: string };
